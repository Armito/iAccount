<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-19 11:23:13
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 11:45:08
 * @FilePath: \iAccount\src\pages\index\Setting\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
    ElForm,
    ElFormItem,
    ElInput,
    FormInstance,
    FormRules,
    ElButton,
    ElCard,
} from 'element-plus'
import { useConfigStore } from '@/store/useConfigStore'

const ruleFormRef = ref<FormInstance>()

const { getConfig, setConfig } = useConfigStore()

const { config } = getConfig()

const ruleForm = reactive<Config>(config)

const formSize = ref<'default' | 'small' | 'large'>('default')

const rules = reactive<FormRules>({
    name: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 16,
            message: 'Length should be 3 to 16',
            trigger: 'blur',
        },
    ],
})

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            setConfig(ruleForm)
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<template>
    <el-card>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
            label-position="top"
        >
            <el-form-item label="空间名称" prop="name">
                <el-input v-model="ruleForm.name" maxlength="16" clearable />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    保存
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
