<template>
    <div :ref="(getRef as any)">{{ randomName }}</div>
    <div
        :ref="
            (el) => {
                divRef = el
            }
        "
    >
        {{ `${randomBook} ~ ${randomBookRarity}` }}
    </div>
    <el-button @click="roll">更换</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRandomName } from '@/hooks/useRandomName'

const getRef = (ins: Element) => {
    console.log(ins)
}
const divRef = ref()

const { randomName, roll, randomBook, randomBookRarity } = useRandomName()
</script>

<style lang="scss" scoped></style>
