<script lang="ts">
export default {
    name: 'ARadio',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import {
    NRadioGroup,
    NRadio,
    NSpace,
    RadioGroupProps,
    RadioProps as RadioItemProps,
} from 'naive-ui'

// props
export interface ARadioProps extends RadioGroupProps {
    options?: RadioItemProps[]
}
const props = defineProps<ARadioProps>()

// attrs
const attrs = useAttrs()
</script>

<template>
    <NRadioGroup v-bind="attrs">
        <NSpace>
            <NRadio
                v-for="option in props.options"
                :key="option.value"
                v-bind="option"
            >
                <slot name="label" v-bind="option">
                    {{ option.label }}
                </slot>
            </NRadio>
        </NSpace>
    </NRadioGroup>
</template>

<style lang="scss" scoped></style>
