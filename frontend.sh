#!/usr/bin/env bash
cd ./frontend/ || exit
pnpm install
pnpm dev
cd - || exit
