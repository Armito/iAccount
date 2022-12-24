<template>
    <div :ref="(getRef as any)"></div>
    <div
        :ref="
            (el) => {
                divRef = el
            }
        "
    ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const getRef = (ins: Element) => {
    console.log(ins)
}

const divRef = ref()
</script>

<style lang="scss" scoped></style>
