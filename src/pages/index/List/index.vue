<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:55
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 12:06:26
 * @FilePath: \iAccount\src\pages\index\List\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElButton, ElEmpty } from 'element-plus'
import ListItem from './components/ListItem/index.vue'
import ListItemDialog from './components/ListItemDialog/index.vue'
import { v4 as uuidV4 } from 'uuid'
import { useExcel } from '@/hooks/useExcel'

const accountList = ref<Account[]>([])

const { readExcel, writeExcel } = useExcel()

readExcel('账号', (data) => {
    accountList.value = data
})

const formModel = reactive<FormModel>({})

const editDialogVisible = ref(false)

const handleAdd = () => {
    handleEditDialogOpen()
}

const handleEdit = (_account: Account) => {
    Object.assign(formModel, _account)
    handleEditDialogOpen()
}

const handleEditDialogOpen = () => {
    editDialogVisible.value = true
}

const handleEditDialogSave = (model: FormModel) => {
    if (formModel.id) {
        accountList.value = accountList.value.map((account) => {
            if (account.id === formModel.id) {
                return {
                    ...formModel,
                    ...model,
                } as Account
            } else {
                return account
            }
        })
    } else {
        accountList.value.unshift({
            id: uuidV4(),
            ...model,
        } as Account)
    }
    writeExcel('账号', accountList.value)
    handleEditDialogClose()
}

const handleEditDialogClose = () => {
    editDialogVisible.value = false
    Object.assign(formModel, {})
}

const handleDelete = (id: string) => {
    accountList.value = accountList.value.filter((account) => account.id !== id)
    writeExcel('账号', accountList.value)
}
</script>

<template>
    <div class="list-box">
        <div class="list-box-add">
            <el-button type="primary" @click="handleAdd">新增</el-button>
        </div>

        <el-empty v-if="!accountList.length" :image-size="200" />

        <ListItem
            v-for="item in accountList"
            :key="item.id"
            :item="item"
            :edit-item="handleEdit"
            :delete-item="handleDelete"
        />
    </div>

    <ListItemDialog
        :visible="editDialogVisible"
        :title="formModel.id ? '编辑' : '新增'"
        :form-model="formModel"
        :close="handleEditDialogClose"
        :save="handleEditDialogSave"
    />
</template>

<style lang="scss" scoped>
@use '@/styles/common.scss' as *;

.list-box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    @include no-scrollbar;
}
.list-box-add {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
