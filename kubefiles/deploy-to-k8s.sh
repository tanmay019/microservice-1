#!/bin/bash

baseDir=$(echo $(pwd))
kubeFiles=$baseDir/kubefiles

# echo $baseDir/kubefiles
cd $kubeFiles
ks apply -f ./deployment/log-deployment.yaml &&
ks apply -f ./deployment/nginx-controller.yaml &&
ks apply -f ./deployment/react-deployment.yaml

ks apply -f ./service/log-service.yaml &&
ks apply -f ./service/nginx-service.yaml &&
ks apply -f ./service/react-service.yaml

ks apply -f ./ingress/ingress.yaml
