<script lang="ts" setup>
import { ElButton, ElMessage } from 'element-plus'
import { DocumentCopy } from '@element-plus/icons-vue'

withDefaults(
    defineProps<{
        text: string
    }>(),
    {
        text: '',
    },
)

const onSuccess = () => {
    ElMessage({
        message: '复制成功！',
        type: 'success',
    })
}
</script>

<template>
    <el-button
        v-clipboard:copy="text"
        v-clipboard:success="onSuccess"
        type="text"
        size="small"
        :icon="DocumentCopy"
    />
</template>
