/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:32
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-18 14:28:39
 * @FilePath: \iAccount\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'
import routes from '~pages'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to) => {
    if (to.path === '/') {
        return '/list'
    }
})

export default router
