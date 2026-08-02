FROM node:26-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

COPY . .

ENV NODE_ENV=production
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV PONDOKNUSA_HOST=0.0.0.0
ENV PONDOKNUSA_PORT=3000

# Best-effort warm caches. Views compile on miss when requireCompiledCache is false.
RUN npx pondoknusa config:cache \
  && (npx pondoknusa route:cache || true) \
  && (npx pondoknusa view:cache || true)

EXPOSE 3000

CMD ["./deploy/docker-entrypoint.sh"]
