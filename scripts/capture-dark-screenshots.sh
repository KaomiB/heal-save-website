#!/usr/bin/env bash
# Dark-mode website screenshots → screenshots/ (gitignored).
# Uses Playwright --color-scheme=dark so next-themes (system) applies dark UI.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p "$ROOT/screenshots"
PORT="${PREVIEW_PORT:-5181}"
cleanup() { kill $(lsof -t -i:"$PORT" 2>/dev/null) 2>/dev/null || true; }
trap cleanup EXIT

npm run build --silent
npx --yes vite preview --port "$PORT" --host 127.0.0.1 &
for i in 1 2 3 4 5 6 7 8 9 10; do
  curl -sf "http://127.0.0.1:$PORT/" >/dev/null && break
  sleep 1
done
BASE="http://127.0.0.1:$PORT"
npx --yes playwright@1.49.1 screenshot --full-page --color-scheme=dark "$BASE/" "$ROOT/screenshots/dark-website-home.png"
npx --yes playwright@1.49.1 screenshot --full-page --color-scheme=dark --wait-for-timeout=20000 "$BASE/savvy" "$ROOT/screenshots/dark-website-savvy.png"
cleanup
echo "Wrote screenshots/dark-website-home.png and dark-website-savvy.png"
