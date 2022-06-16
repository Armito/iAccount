<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElPageHeader,
} from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'

const route = useRoute()
const gameName = ref('')
onMounted(() => {
    const { path } = route
    if (path === '/games/saolei') {
        gameName.value = '扫雷'
    }
    if (path === '/games/zhizhu') {
        gameName.value = '蜘蛛纸牌'
    }
})

const router = useRouter()
const back = () => {
    router.go(-1)
}
</script>

<template>
    <el-container>
        <el-header>
            <el-page-header
                :icon="ArrowLeft"
                :content="gameName"
                @back="back"
            />
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
