<script lang="ts" setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { ARadio } from '@/components/ACompoents'

const model = reactive<{
    gender: Gender
}>({
    gender: 'Unknown',
})
</script>

<template>
    <el-form>
        <el-form-item>
            <ARadio
                v-model="model.gender"
                :options="[
                    { label: 'Male', text: '男' },
                    { label: 'Female', text: '女' },
                    { label: 'Unknown', text: '未知' },
                ]"
            />
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped></style>
