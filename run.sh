#!/bin/bash
docker run --rm -it -v $(pwd)/dist:/home/node crawler node crawler.js
