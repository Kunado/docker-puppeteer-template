FROM buildkite/puppeteer:latest

WORKDIR /home/node
RUN cp /package.json /package-lock.json /home/node/
RUN npm install
