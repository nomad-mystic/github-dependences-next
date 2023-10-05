FROM node:18-alpine AS base

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ../.. .

RUN npm install

RUN npm run build

ENV NODE_ENV=development

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["npm", "run", "development"]
