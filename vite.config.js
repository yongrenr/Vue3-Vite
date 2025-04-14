import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { loadEnv } from 'vite'
// https://vitejs.dev/config/
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//  它使用了 Vite 的 defineConfig 方法来定义项目的构建和开发服务器配置。
 
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV, VITE_APP_BASE_API, VITE_APP_URL } = env
 
  return {
    base: VITE_APP_ENV === 'production' ? '/vite/' : '/',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    server: {
      port: 80,
      host: true,
      hmr:true,
      open: true,
      proxy: {
        [VITE_APP_BASE_API]: {
          target: VITE_APP_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, ''),
        },
      },
    },
  }
})