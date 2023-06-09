FROM public.ecr.aws/docker/library/node:14.19.0-alpine3.14
COPY --from=dqk02008.live.dynatrace.com/linux/oneagent-codemodules-musl:nodejs / /
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so
WORKDIR /app
COPY package*.json  ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["node", "app.js"]
