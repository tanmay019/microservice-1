#!/bin/bash

baseDir=$(echo $(pwd))
kubeFiles=$baseDir/kubefiles

# echo $baseDir/kubefiles
cd $kubeFiles
kubectl apply -f ./deployment/log-deployment.yaml &&
kubectl apply -f ./deployment/nginx-controller.yaml &&
kubectl apply -f ./deployment/react-deployment.yaml

kubectl apply -f ./service/log-service.yaml &&
kubectl apply -f ./service/nginx-service.yaml &&
kubectl apply -f ./service/react-service.yaml

kubectl apply -f ./ingress/ingress.yaml
