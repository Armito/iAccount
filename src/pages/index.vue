<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElIcon,
} from 'element-plus'
import { Document, Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    router.push(key)
}
</script>

<template>
    <el-container>
        <el-header>
            <h5>Armito's Account</h5>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @select="handleSelect"
                >
                    <el-menu-item index="/list">
                        <el-icon><icon-menu /></el-icon>
                        <span>我的列表</span>
                    </el-menu-item>
                    <el-menu-item index="/detail">
                        <el-icon><document /></el-icon>
                        <span>我的详情</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
