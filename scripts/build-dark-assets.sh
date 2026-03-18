#!/usr/bin/env bash
# Regenerate *-dark.png variants (ImageMagick). Run from repo root after replacing source PNGs.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$ROOT/src/assets"

# Large panel photos
for f in 4c83caaa278168328cdba516fcfdc4855eb013b4 a2ebc7b0c57754afefb445b76fc3bd260d0cadb6; do
  magick "$ASSETS/${f}.png" \
    -modulate 32,48,100 -gamma 0.95 \
    \( +clone -fill 'rgb(18,16,22)' -colorize 100% \) -compose blend -define compose:args=22 -composite \
    "$ASSETS/${f}-dark.png"
done
# Card thumbnails
for f in cc116d210517b4863061509043cebfa51389a5de c56d8a349180873c098f29864ced7d458740ae62 a003f28c1a19d48915960f045dfec66ca137a49a; do
  magick "$ASSETS/${f}.png" \
    -modulate 44,62,100 -gamma 0.98 \
    \( +clone -fill 'rgb(20,18,24)' -colorize 100% \) -compose blend -define compose:args=18 -composite \
    "$ASSETS/${f}-dark.png"
done
magick "$ASSETS/af02000a7f8b6d610fec4c836770abb05f9b1e7d.png" \
  -modulate 38,55,100 \
  \( +clone -fill 'rgb(16,14,18)' -colorize 100% \) -compose blend -define compose:args=25 -composite \
  "$ASSETS/af02000a7f8b6d610fec4c836770abb05f9b1e7d-dark.png"
echo "Wrote *-dark.png under src/assets/"
