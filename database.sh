#!/usr/bin/env bash
cd ./database/ || exit
nix-build database.nix
./result/bin/run-nixos-vm
cd - || exit
