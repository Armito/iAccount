<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    FormInstance,
} from 'element-plus'

const props = defineProps<{
    visible: boolean
    title: string
    formModel: FormModel
    close: () => void
    save: (model: FormModel) => void
}>()

const rules = {
    appName: [{ required: true, trigger: 'blur' }],
    account: [{ required: true, trigger: 'blur' }],
    password: [{ required: true, trigger: 'blur' }],
}

const formRef = ref<FormInstance>()

const model = reactive<FormModel>(props.formModel)

const _close = () => {
    props.close()
    formRef.value?.resetFields()
}

const _save = () => {
    formRef.value?.validate((valid) => {
        if (valid) {
            props.save(model)
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
            <el-form-item label="AppName" prop="appName">
                <el-input v-model="model.appName" />
            </el-form-item>
            <el-form-item label="Account" prop="account">
                <el-input v-model="model.account" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input
                    v-model="model.password"
                    type="password"
                    show-password
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
