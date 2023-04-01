FROM public.ecr.aws/docker/library/node:14.19.0-alpine3.14
WORKDIR /app
COPY package*.json  ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["node", "app.js"]
