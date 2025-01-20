# @vitg/config

通用配置文件

## Prettier

```json5
{
  prettier: "@vitg/config/prettierrc",
}
```

## Browserslist

在使用前，确保设置了 `BROWSERSLIST_DANGEROUS_EXTEND=1` 环境变量。
通常如果你使用 `vite` 的脚手架，在更目录创建 `.env` 文件，将环境变量写在 `.env` 文件中即可。

```json5
{
  browserslist: ["extends @vitg/config/browserslist"],
}
```

## Vite devServer

根据环境变量切换代理服务器地址，默认根据 `process.env.SERVER` 来决定使用的代理配置。

```ts
// vite.config.ts

import proxy from "@vitg/config/proxy";

// 或者可以使用 cross-env 直接在命令行里面设置环境变量
process.ev.SERVER = "dev";

const proxyServer = proxy({
  dev: {
    "/api": {
      target: "https://0.0.0.0:8002",
    },
    "/genai": {
      target: `http://0.0.0.0:8848`,
    },
  },
  prod: {
    "/api": {
      target: "https://ngs.ncspoc.online",
    },
    "/genai": {
      target: `https://ngs.ncspoc.online`,
    },
  },
});

export default defineConfig({
  // ...
  server: {
    port: 5174,
    // Use Here
    proxy: proxyServer,
  },
  // ....
});
```
