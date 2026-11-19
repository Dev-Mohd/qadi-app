#!/usr/bin/env bash
# Convert raw iPhone HDR clips to SDR 1080x1920 30fps proxies used by the compositions.
# Usage: bash scripts/prepare.sh   (run from the repo root)
set -euo pipefail
SRC=public/assets/videos
DST=public/assets/proxies
mkdir -p "$DST"
TM="zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p"
conv() { # name, extra filter
  ffmpeg -loglevel error -y -i "$SRC/IMG_$1.mov" -vf "$TM${2:+,$2},fps=30" \
    -c:v libx264 -crf 16 -preset fast -c:a aac -b:a 192k "$DST/$1.mp4"
  echo "ok $1"
}
conv 4020
conv 4021
conv 4026 "transpose=2"   # shot sideways
conv 4027 "transpose=2"
