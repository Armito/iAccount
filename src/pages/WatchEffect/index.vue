<template>
    <el-card>{{ count }}</el-card>
    <el-button @click="increment">+1</el-button>
    <el-button @click="divide">/2</el-button>
    <el-button @click="stop">stop watch</el-button>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useCount } from '@/hooks/useCount'
import { useAsyncwork } from '@/hooks/useAsyncwork'

const { count, increment, divide } = useCount()
watchEffect(() => {
    // console.log(count.value)
})

const { asyncwork } = useAsyncwork()
const stop = watchEffect(async () => {
    const res = await asyncwork(count.value)
    console.log(res)
})
</script>

<style lang="scss" scoped></style>
