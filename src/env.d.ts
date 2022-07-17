/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:32
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 12:03:47
 * @FilePath: \iAccount\src\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'uuid'
