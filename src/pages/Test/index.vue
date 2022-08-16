<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { ElForm, ElIcon, ElSpace } from 'element-plus'
import { AFormItem } from '@/components/ACompoents/index'
import { ARadioProps } from '@/components/ACompoents/types'
import { Lock } from '@element-plus/icons-vue'

const options: Pickout<ARadioProps, 'options'> = [
    { label: 'Male', text: '男' },
    { label: 'Female', text: '女' },
    { label: 'Unknown', text: '未知' },
]

const model = reactive<{
    name: string
    age: string
    gender: Gender
}>({
    name: 'Srmito',
    age: '18',
    gender: 'Unknown',
})
watch(model, () => {
    console.log(model)
})
</script>

<template>
    <el-form label-width="80px">
        <a-form-item
            type="text"
            v-model="model.name"
            label="姓名"
            :field-props="{ clearable: true }"
        />
        <a-form-item
            type="password"
            label="年龄"
            v-model="model.age"
            :field-props="{ disabled: true }"
        >
            <template #label="{ label }">
                <div
                    :style="{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'baseline',
                    }"
                >
                    <el-icon><Lock /></el-icon>
                    {{ label }}
                </div>
            </template>
        </a-form-item>
        <a-form-item
            type="radio"
            label="性别"
            v-model="model.gender"
            :field-props="{ options }"
        />
    </el-form>
</template>

<style lang="scss" scoped></style>
