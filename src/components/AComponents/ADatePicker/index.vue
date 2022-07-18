<script lang="ts">
export default {
    name: 'ARadio',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { NDatePicker } from 'naive-ui'

// props
export interface ARadioProps extends RadioGroupProps {
    options?: RadioItemProps[]
}
const props = defineProps<ARadioProps>()

// attrs
const attrs = useAttrs()
</script>

<template>
    <NDatePicker v-bind="attrs"> </NDatePicker>
</template>

<style lang="scss" scoped></style>
