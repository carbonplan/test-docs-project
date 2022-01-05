#!/bin/bash

# install mamba
yum install wget
wget -qO- https://micromamba.snakepit.net/api/micromamba/linux-64/latest | tar -xvj bin/micromamba
./bin/micromamba shell init -s bash -p ~/micromamba
source ~/.bashrc

# install python deps
micromamba create -f ./environment.yml
micromamba activate docs
pip install ..

# build json content
make json

# build docs
next build
