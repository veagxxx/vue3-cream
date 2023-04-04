import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import { loadEnv } from 'vite'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: "sass" }),
        ],
      }),
      // svg-icon
      createSvgIconsPlugin({
        // 指定文件路径
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')]
      }),
      // mock
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: true
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
    },
    // 自定义主题色
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/index.scss" as *; 
          `,
        },
      },
    },
    // 服务、代理配置
    server: {
      hmr: true,
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_PROXY,
          changeOrigin: true,
          ws: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
