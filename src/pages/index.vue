<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:55
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 11:29:32
 * @FilePath: \iAccount\src\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElIcon,
} from 'element-plus'
import {
    Document,
    Apple,
    Setting,
    Reading,
    Timer,
} from '@element-plus/icons-vue'
import { useConfigStore } from '@/store/useConfigStore'

const configStore = useConfigStore()

const router = useRouter()
const handleSelect = (key: string) => {
    router.push(key)
}
</script>

<template>
    <el-container>
        <el-aside width="160px">
            <el-menu
                default-active="/list"
                class="el-menu-vertical-demo"
                @select="handleSelect"
            >
                <div class="name-box">{{ configStore.config.name }}</div>

                <el-menu-item index="/list">
                    <el-icon><document /></el-icon>
                    <span>我的账号</span>
                </el-menu-item>
                <el-menu-item index="/detail">
                    <el-icon><Apple /></el-icon>
                    <span>我的应用</span>
                </el-menu-item>
                <el-menu-item index="/read">
                    <el-icon><Reading /></el-icon>
                    <span>我的书架</span>
                </el-menu-item>
                <el-menu-item index="/plan">
                    <el-icon><Timer /></el-icon>
                    <span>我的计划</span>
                </el-menu-item>
                <el-menu-item index="/setting">
                    <el-icon><Setting /></el-icon>
                    <span>我的设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style lang="scss" scoped>
.el-container,
.el-aside,
.el-main {
    height: 100%;
}

.el-main {
    padding: 10px;
}

.name-box {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}
</style>
