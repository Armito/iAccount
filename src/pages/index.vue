<script setup lang="ts">
import router from '@/router'
import { ElButton } from 'element-plus'

const jump = (path: string) => {
    router.push(path)
}
</script>

<template>
    <el-button type="primary" @click="() => jump('/games/saolei')">
        扫雷
    </el-button>
    <el-button type="primary" @click="() => jump('/games/zhizhu')">
        蜘蛛纸牌
    </el-button>
</template>
