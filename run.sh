#!/bin/bash
docker run --rm -it -v $(pwd):/home/pptruser crawler node dist/crawler.js
