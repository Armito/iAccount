<script lang="ts">
export default {
    name: 'ARadio',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { NRadioGroup, NRadio, NSpace, RadioGroupProps } from 'naive-ui'
import { ARadioProps_options } from './types'

// attrs
const attrs = useAttrs()

// props
interface ARadioProps extends RadioGroupProps {
    options?: ARadioProps_options
}
const props = defineProps<ARadioProps>()
</script>

<template>
    <NRadioGroup v-bind="attrs">
        <NSpace>
            <NRadio
                v-for="option in props.options"
                v-bind="option"
                :key="option.value"
            >
                <slot v-bind="option" name="label">
                    {{ option.label }}
                </slot>
            </NRadio>
        </NSpace>
    </NRadioGroup>
</template>

<style lang="less" scoped></style>
