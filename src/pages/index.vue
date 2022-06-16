<script setup lang="ts">
import router from '@/router'
import { ElButton } from 'element-plus'

const jump = (path: string) => {
    router.push(path)
}
</script>

<template>
    123456
    <el-button type="warning" @click="() => jump('/list')">list</el-button>
    <el-button type="warning" @click="() => jump('/vueuse')">vueuse</el-button>
</template>
