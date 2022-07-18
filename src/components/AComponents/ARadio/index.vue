<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-18 20:08:21
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-18 22:27:23
 * @FilePath: \iAccount\src\components\AComponents\ARadio\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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

<style lang="scss" scoped></style>
