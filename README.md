# Next 15 first steps

## Install project

```bash
bun install
bun run dev
```

## Docker image

In order to generate a docker image, you must need a package-lock.json file. To generate it, you must run the following command:

```bash
npm install
```

The next.config.ts needs to have an export default object with the following properties:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
};

export default nextConfig;
```

Then, you can generate the docker image and run it with the following commands:

```bash
docker build -t next15:1.0.0 .
docker container run -p 3000:3000 next15
```