FROM public.ecr.aws/docker/library/node:21-alpine3.18
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY src/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY src/ /usr/src/app

EXPOSE 3000

# Run app
CMD [ "npm", "start" ]