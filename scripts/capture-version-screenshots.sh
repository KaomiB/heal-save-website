#!/usr/bin/env bash
# Writes to screenshots/ (gitignored — local only). Requires: npm run build, Playwright (npx).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p "$ROOT/screenshots"
PORT=5180
commits=(
  "ea7d85a:website-ea7d85a-initial"
  "881393f:website-881393f-local-assets"
  "ca9e0f6:website-ca9e0f6-figma-draft"
  "bd01cc6:website-bd01cc6-latest"
)
cleanup() { kill $(lsof -t -i:"$PORT" 2>/dev/null) 2>/dev/null || true; }
trap cleanup EXIT

for entry in "${commits[@]}"; do
  hash="${entry%%:*}"
  name="${entry##*:}"
  git checkout -q "$hash"
  npm run build --silent
  cleanup
  npx --yes vite preview --port "$PORT" --host 127.0.0.1 &
  for i in 1 2 3 4 5 6 7 8 9 10; do curl -sf "http://127.0.0.1:$PORT/" >/dev/null && break; sleep 1; done
  npx --yes playwright@1.49.1 screenshot --full-page "http://127.0.0.1:$PORT/" "$ROOT/screenshots/${name}.png"
  cleanup
done
git checkout -q main
echo "Done. Screenshots in $ROOT/screenshots/"
