<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:55
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 12:06:26
 * @FilePath: \iAccount\src\pages\index\List\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'
import {
    ElCard,
    ElButton,
    ElDescriptions,
    ElDescriptionsItem,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    FormInstance,
    ElPopconfirm,
    ElEmpty,
} from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'
import CopyButton from '@/components/CopyButton/index.vue'
import { v4 as uuidV4 } from 'uuid'
import { useExcel } from '@/hooks/useExcel'

const accountList = ref<Account[]>([])

const { readExcel, writeExcel } = useExcel()

readExcel('账号', (data) => {
    accountList.value = data
})

const formRef = ref<FormInstance>()

const rules = {
    appName: [{ required: true, trigger: 'blur' }],
    account: [{ required: true, trigger: 'blur' }],
    password: [{ required: true, trigger: 'blur' }],
}

interface FormModel {
    appName: string
    account: string
    password: string
}

const formModel = ref<FormModel>({
    appName: '',
    account: '',
    password: '',
})

const editDialogVisible = ref(false)

const handleAddAccount = () => {
    handleEditDialogOpen()
}

const editingAccount = ref<Account>()

const handleEditAccount = (_account: Account) => {
    const { appName, account, password } = _account
    editingAccount.value = _account
    formModel.value = {
        appName,
        account,
        password,
    }
    handleEditDialogOpen()
}

const handleEditDialogOpen = () => {
    editDialogVisible.value = true
}

const handleEditDialogClose = () => {
    editDialogVisible.value = false
    formModel.value = {
        appName: '',
        account: '',
        password: '',
    }
    editingAccount.value = undefined
}

const handleEditDialogSave = () => {
    formRef.value?.validate((valid) => {
        if (valid) {
            if (editingAccount.value) {
                accountList.value = accountList.value.map((account) => {
                    if (account.id === editingAccount.value?.id) {
                        return {
                            ...editingAccount.value,
                            ...formModel.value,
                        }
                    } else {
                        return account
                    }
                })
            } else {
                accountList.value.unshift({
                    id: uuidV4(),
                    ...formModel.value,
                })
            }
            writeExcel('账号', accountList.value)
            handleEditDialogClose()
        }
    })
}

const handleDeleteAccount = (id: string) => {
    accountList.value = accountList.value.filter((account) => account.id !== id)
    writeExcel('账号', accountList.value)
}
</script>

<template>
    <div class="list-box">
        <div class="list-box-add">
            <el-button type="primary" @click="handleAddAccount">新增</el-button>
        </div>

        <el-empty v-if="!accountList.length" :image-size="200" />

        <el-card v-for="item in accountList" :key="item.id" class="card-box">
            <template #header>
                <div class="card-header">
                    <span class="card-header-text">
                        {{ `『${item.appName}』` }}
                    </span>
                    <div>
                        <el-button
                            type="primary"
                            :icon="Edit"
                            size="small"
                            @click="() => handleEditAccount(item)"
                        />
                        <el-popconfirm
                            title="Are you sure to delete this?"
                            @confirm="() => handleDeleteAccount(item.id)"
                        >
                            <template #reference>
                                <el-button
                                    type="danger"
                                    :icon="Delete"
                                    size="small"
                                />
                            </template>
                        </el-popconfirm>
                    </div>
                </div>
            </template>
            <div class="text item">
                <el-descriptions :column="2">
                    <el-descriptions-item label="账号">
                        {{ item.account }}
                        <CopyButton :text="item.account" />
                    </el-descriptions-item>
                    <el-descriptions-item label="密码">
                        {{ Array(item.password.length).fill('*').join('') }}
                        <CopyButton :text="item.password" />
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
    </div>

    <el-dialog
        v-model="editDialogVisible"
        :title="editingAccount ? '编辑' : '新增'"
        width="440px"
        destroy-on-close
        :before-close="handleEditDialogClose"
    >
        <el-form
            ref="formRef"
            :model="formModel"
            label-width="120px"
            :rules="rules"
        >
            <el-form-item label="AppName" prop="appName">
                <el-input v-model="formModel.appName" />
            </el-form-item>
            <el-form-item label="Account" prop="account">
                <el-input v-model="formModel.account" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input
                    v-model="formModel.password"
                    type="password"
                    show-password
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleEditDialogClose">Cancel</el-button>
                <el-button type="primary" @click="handleEditDialogSave">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="less" scoped>
@import '@/styles/common';

.list-box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .no-scrollbar();
}

.list-box-add {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
}

.card-box {
    margin-bottom: 20px;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header-text {
    font-style: italic;
}
</style>
