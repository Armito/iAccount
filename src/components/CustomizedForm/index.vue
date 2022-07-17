<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 11:49:09
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 18:03:30
 * @FilePath: \iAccount\src\components\CustomizedForm\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { NForm, NFormItem } from 'naive-ui'
import {
    NInput,
    NRadioGroup,
    NRadio,
    NSpace,
    NDatePicker,
    NIcon,
} from 'naive-ui'
import { FormProps } from 'naive-ui'
import { GameControllerOutline } from '@vicons/ionicons5'
import { CustomizedField } from './types'

// props
interface CustomizedFormProps {
    formProps?: FormProps
    fields: CustomizedField[]
}
const props = defineProps<CustomizedFormProps>()

// emits
interface CustomizedFormEmits {
    (event: 'change', model: Record<string, any>): void
}
const emits = defineEmits<CustomizedFormEmits>()

// model
const initialModel = props.fields.reduce(
    (pre, cur) => ({
        ...pre,
        [cur.key]: cur.value,
    }),
    {},
)
const model = reactive<Record<string, any>>(initialModel)
watch(model, () => {
    emits('change', model)
})

// expose
defineExpose({ model })
</script>

<template>
    <n-form ref="formRef" :model="model" v-bind="props.formProps">
        <template v-for="field in props.fields" :key="field.id">
            <n-form-item
                v-if="field.type === 'Text'"
                v-bind="field.formItemProps"
                :path="field.key"
                :label="field.label"
            >
                <n-input
                    v-model:value="model[field.key]"
                    v-bind="field.dataItemProps"
                />
            </n-form-item>

            <n-form-item
                v-if="field.type === 'Radio'"
                v-bind="field.formItemProps"
                :path="field.key"
                :label="field.label"
            >
                <n-radio-group
                    v-model:value="model[field.key]"
                    v-bind="field.dataItemProps"
                >
                    <n-space>
                        <n-radio
                            v-for="option in field.options"
                            :key="option.value"
                            v-bind="option"
                        />
                    </n-space>
                </n-radio-group>
            </n-form-item>

            <n-form-item
                v-if="field.type === 'Date' || field.type === 'Datetime'"
                v-bind="field.formItemProps"
                :path="field.key"
                :label="field.label"
            >
                <template #label>
                    <n-icon size="16">
                        <game-controller-outline />
                    </n-icon>
                    Game
                </template>
                <template #default>
                    <n-date-picker
                        v-model:value="model[field.key]"
                        v-bind="field.dataItemProps"
                        :type="field.type.toLowerCase()"
                    />
                </template>
            </n-form-item>
        </template>
    </n-form>
</template>

<style lang="scss" scoped></style>
