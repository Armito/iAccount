<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElDatePicker,
    FormInstance,
} from 'element-plus'
import moment from 'moment'
import { Task } from '../../types'

const props = defineProps<{
    visible: boolean
    title: string
    formModel: Partial<Task>
    close: () => void
    save: (model: Omit<Task, 'id'>) => void
}>()

const formRef = ref<FormInstance>()

const model = reactive<Partial<Task>>(props.formModel)

const rules = {
    title: [{ required: true, trigger: 'blur' }],
    content: [{ required: true, trigger: 'blur' }],
    expire: [{ required: true, trigger: 'blur' }],
}

const _close = () => {
    props.close()
    formRef.value?.resetFields()
}

const _save = () => {
    formRef.value?.validate((valid) => {
        if (valid) {
            props.save({
                ...model,
                expire: moment(model?.expire).format('YYYY-MM-DD HH:mm:ss'),
            })
            formRef.value?.resetFields()
        }
    })
}
</script>

<template>
    <el-dialog
        :model-value="visible"
        :title="title"
        width="440px"
        destroy-on-close
        :before-close="close"
    >
        <el-form
            ref="formRef"
            :model="formModel"
            label-width="120px"
            :rules="rules"
        >
            <el-form-item label="事项：" prop="title">
                <el-input
                    v-model="formModel.title"
                    :style="{ width: '100%' }"
                />
            </el-form-item>
            <el-form-item label="规划：" prop="content">
                <el-input
                    v-model="formModel.content"
                    :style="{ width: '100%' }"
                />
            </el-form-item>
            <el-form-item label="截止日期：" prop="expire">
                <el-date-picker
                    v-model="formModel.expire"
                    type="datetime"
                    :style="{ width: '100%', display: 'flex' }"
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="_close">Cancel</el-button>
                <el-button type="primary" @click="_save"> Confirm </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped></style>
