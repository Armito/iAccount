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
import { Document, Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()
const handleSelect = (key: string) => {
    router.push(key)
}
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="/list"
                class="el-menu-vertical-demo"
                @select="handleSelect"
            >
                <div class="name-box">Armito's Account</div>
                <el-menu-item index="/list">
                    <el-icon><icon-menu /></el-icon>
                    <span>我的账号</span>
                </el-menu-item>
                <el-menu-item index="/detail">
                    <el-icon><document /></el-icon>
                    <span>我的应用</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style lang="less" scoped>
.el-container,
.el-aside,
.el-main {
    height: 100%;
}

.name-box {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}
</style>
