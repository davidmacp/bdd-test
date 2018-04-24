FROM jimlambie/headless

USER root

# App under test
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

CMD ["npm", "test"]
