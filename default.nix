{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    nodePackages.nodejs
    nodePackages.pnpm
    httpie
  ];
}

