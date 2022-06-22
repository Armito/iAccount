<script lang="ts" setup>
import { ElButton, ElNotification } from 'element-plus'
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
    ElNotification({
        message: 'Copy success!',
        type: 'success',
        duration: 1000,
        position: 'bottom-left',
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
