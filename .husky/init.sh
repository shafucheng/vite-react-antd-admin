#!/usr/bin/env sh
if [ -x "$(command -v fnm)" ]; then
  eval "$(fnm env --use-on-cd)"
fi

if ! [ -x "$(command -v pnpm)" ]; then
  echo 'Error: pnpm is not installed.' >&2
  exit 1
fi
