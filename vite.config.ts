import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages' // 自动生成路由的插件
import ElementPlus from 'unplugin-element-plus/vite' // 自动导入element-plus组件样式
import electron from 'vite-plugin-electron' // 集成vite和electron
import electronRenderer from 'vite-plugin-electron/renderer'
import polyfillExports from 'vite-plugin-electron/polyfill-exports'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Pages(),
        ElementPlus({
            useSource: true,
        }),
        electron({
            main: {
                entry: 'electron-main/index.ts',
            },
            preload: {
                input: path.join(__dirname, './electron-preload/index.ts'),
            },
        }),
        electronRenderer(),
        polyfillExports(),
    ],
    server: {
        port: 8080,
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        emptyOutDir: false,
    },
})
