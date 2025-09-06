import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// 导入 package.json 获取版本号
import pkg from "./package.json";

let devProxyServer = "http://localhost:8081";
if (process.env.DEV_PROXY_SERVER && process.env.DEV_PROXY_SERVER.length > 0) {
  console.log("Use devProxyServer from environment: ", process.env.DEV_PROXY_SERVER);
  devProxyServer = process.env.DEV_PROXY_SERVER;
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据 mode 参数决定是否启用代码压缩
  const enableMinify = mode === 'release';
  console.log(`Build mode: ${mode}, minify: ${enableMinify}`);

  return {
    // base: pkg.cdnUrl,
    plugins: [
      react(),
      tailwindcss(),
      codeInspectorPlugin({
        bundler: "vite",
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 3001,
      proxy: {
        "^/api": {
          target: devProxyServer,
          xfwd: true,
        },
        "^/memos.api.v1": {
          target: devProxyServer,
          xfwd: true,
        },
        "^/file": {
          target: devProxyServer,
          xfwd: true,
        },
      },
    },
    resolve: {
      alias: {
        "@/": `${resolve(__dirname, "src")}/`,
      },
    },
    build: {
      // 根据 mode 参数决定是否启用代码压缩
      minify: enableMinify,
      rollupOptions: {
        output: {
          // 自定义 JS 文件名格式，使用版本号作为指纹
          entryFileNames: `assets/${pkg.version}/[name].js`,
          chunkFileNames: `assets/${pkg.version}/[name].js`,
          // 自定义 CSS 和其他资源文件名格式
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) {
              return `assets/${pkg.version}/[name].[ext]`;
            }
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(css)$/i.test(assetInfo.name)) {
              return `assets/${pkg.version}/[name].css`;
            }
            return `assets/${pkg.version}/[name].[ext]`;
          },
          manualChunks: {
            "utils-vendor": ["dayjs", "lodash-es"],
            "katex-vendor": ["katex"],
            "mermaid-vendor": ["mermaid"],
            "leaflet-vendor": ["leaflet", "react-leaflet"],
          },
        },
      },
    },
  }
});

/*
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    codeInspectorPlugin({
      bundler: "vite",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3001,
    proxy: {
      "^/api": {
        target: devProxyServer,
        xfwd: true,
      },
      "^/memos.api.v1": {
        target: devProxyServer,
        xfwd: true,
      },
      "^/file": {
        target: devProxyServer,
        xfwd: true,
      },
    },
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "utils-vendor": ["dayjs", "lodash-es"],
          "katex-vendor": ["katex"],
          "mermaid-vendor": ["mermaid"],
          "leaflet-vendor": ["leaflet", "react-leaflet"],
        },
      },
    },
  },
});
 */
