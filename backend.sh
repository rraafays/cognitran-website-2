#!/usr/bin/env bash
cd ./backend/ || exit
pnpm install
pnpm run develop
cd - || exit
