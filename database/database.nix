let
  pkgs = import <nixpkgs> { };

  configuration = { ... }: {
    services.mosquitto = {
      enable = true;
      listeners = [{
        acl = [ "pattern readwrite #" ];
        omitPasswordAuth = true;
        settings.allow_anonymous = true;
      }];
    };
  };

  debugVm = { modulesPath, ... }: {
    imports = [
      "${modulesPath}/virtualisation/qemu-vm.nix"
    ];

    virtualisation.forwardPorts = [
      { from = "host"; host.port = 2222; guest.port = 22; }
      { from = "host"; host.port = 1883; guest.port = 1883; }
    ];

    networking.firewall.enable = false;
    services.openssh.enable = true;
    services.openssh.permitRootLogin = "yes";
    users.extraUsers.root.password = "";
  };

  nixosEvaluation = pkgs.nixos [
    debugVm
    configuration
  ];
in

nixosEvaluation.config.system.build.vm
