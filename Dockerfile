FROM node:22-alpine

WORKDIR /app

COPY package.json /

# INSTALL curl y bash
RUN apk add --no-cache curl bash

# CONFIGURE PATH BUN
ENV PATH="/root/.bun/bin:$PATH"

#INSTALL BUN
RUN curl -fsSL https://bun.sh/install | bash

COPY . .

RUN bun install

RUN bun run build

EXPOSE 3000

CMD [ "bun", "run", "start" ]