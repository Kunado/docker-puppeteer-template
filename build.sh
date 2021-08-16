#!/bin/bash
DIRNAME=${pwd | sed -e 's%/.*/%%g'}
docker build -t ${DIRNAME} .
