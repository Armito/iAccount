import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages' // 自动生成路由的插件
import ElementPlus from 'unplugin-element-plus/vite' // 自动导入element-plus组件样式
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        Pages({
            extensions: ['vue'],
            exclude: ['**/components/*.vue', '*.ts'],
        }),
        ElementPlus(),
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
})
