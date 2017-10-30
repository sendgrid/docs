# -*- mode: ruby -*-
# vi: set ft=ruby :

app_path = "/home/vagrant/docs"

Vagrant.configure("2") do |config|
  config.ssh.forward_agent = true
  config.vm.synced_folder Dir.getwd, app_path, nfs: true

  # ubuntu
  config.vm.define 'ubuntu', primary: true do |c|
    c.vm.network "private_network", ip: "192.168.100.2"
    c.vm.network "forwarded_port", guest: 4000, host: 4000
    c.vm.box = "hashicorp/precise64"
    c.vm.box_url = "http://files.vagrantup.com/precise64.box"
    c.vm.provision "shell" do |s|
      s.inline = "apt-get update -y; apt-get install git ruby ruby-dev gems node nodejs npm openjdk-8-jre -y; gem install bundler;
      cd #{app_path} && npm install && bin/install && bin/preview"
      s.privileged = true
    end
  end
end
