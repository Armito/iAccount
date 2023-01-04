<template>
    <ElForm :model="formModel">
        <ElFormItem>
            <AField
                field-type="text"
                v-model="formModel.name"
                clearable
                @input="onChaneg"
            />
        </ElFormItem>

        <ElFormItem>
            <AField
                field-type="select"
                v-model="formModel.gender"
                :options="[
                    { value: 1, label: 'asdsf' },
                    { value: 2, label: 'okmnj' },
                ]"
            />
        </ElFormItem>
    </ElForm>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import AField from '@/components/AField/index.vue'

const formModel = reactive({
    name: '123',
    gender: 1,
})

const onChaneg = (e: any) => {
    // console.log(e)
}

watch(
    formModel,
    () => {
        console.log(formModel)
    },
    { deep: true },
)
</script>

<style lang="scss" scoped></style>
