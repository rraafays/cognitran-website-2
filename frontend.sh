#!/usr/bin/env bash
cd ./frontend/ || exit
pnpm install
pnpm start
cd - || exit
