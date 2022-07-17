/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:32
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 18:57:20
 * @FilePath: \iAccount\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages' // 自动生成路由的插件
import ElementPlus from 'unplugin-element-plus/vite' // 自动导入element-plus组件样式
import VueJsx from '@vitejs/plugin-vue-jsx' // 在vue中写jsx
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [vue(), Pages(), ElementPlus(), VueJsx()],
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
