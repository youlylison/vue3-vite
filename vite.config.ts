import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default (option: any) => {
  const { mode } = option;
  const env: any = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: false,
      }),
    ],
    resolve: {
      // 设置别名
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      // 启动端口
      port: 8080,
      open: true,
      // 设置代理
      proxy: {
        "/api": {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
