<script lang="ts" setup>
import { ElCard, ElButton, ElPopconfirm, ElRow, ElCol } from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'
import CopyButton from '@/components/CopyButton/index.vue'

defineProps<{
    item: Account
    editItem: (item: Account) => void
    deleteItem: (id: Pickout<Account, 'id'>) => void
}>()
</script>

<template>
    <el-card>
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
                        @click="() => editItem(item)"
                    />
                    <el-popconfirm
                        title="Are you sure to delete this?"
                        @confirm="() => deleteItem(item.id)"
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
            <el-row>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="4">账号</el-col>
                        <el-col :span="20">
                            {{ item.account }}
                            <CopyButton :text="item.account" />
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="4">密码</el-col>
                        <el-col :span="20">
                            {{ Array(item.password.length).fill('*').join('') }}
                            <CopyButton :text="item.password" />
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<style lang="less" scoped>
.el-card {
    margin-bottom: 10px;

    :deep(.el-card__header) {
        padding: 8px;
    }
    :deep(.el-card__body) {
        padding: 8px;
    }
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
