<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-02 10:43:39
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-02 13:10:52
 * @FilePath: \iAccount\src\pages\index\Plan\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {
    ElTable,
    ElTableColumn,
    ElButton,
} from 'element-plus'
import { Bell } from '@element-plus/icons-vue'
import TaskDialog from './components/TaskDialog/index.vue'
import { v4 as uuid } from 'uuid'
import { Task, TaskStatus } from './types'

const taskDialogVisible = ref<boolean>(false)

const currentTask = reactive<Partial<Task>>({})

const taskList = ref<Task[]>([])

const addTask = () => {
    taskDialogVisible.value = true
}

const handleTaskDialogSave = (task: Omit<Task, 'id'>) => {
    if (currentTask.id) {
        taskList.value = taskList.value.map(_task => {
            if (_task.id === currentTask.id) {
                return {
                    ..._task,
                    ...task,
                }
            } else {
                return _task
            }
        })
    } else {
        taskList.value.push({
            id: uuid(),
            ...task,
        })
    }
    handleTaskDialogClose()
}

const handleTaskDialogClose = () => {
    taskDialogVisible.value = false
}

const tableRowClassName = ({ row }: { row: Task }) => {
    return row.status === TaskStatus.Done
        ? 'done'
        : row.status === TaskStatus.Expired
        ? 'expired'
        : ''
}


</script>

<template>
    <div class="plan-heander">
        <el-button type="primary" size="small" :icon="Bell" @click="addTask">
            NEW
        </el-button>
    </div>

    <TaskDialog
        :visible="taskDialogVisible"
        title="TASK"
        :form-model="currentTask"
        :save="handleTaskDialogSave"
        :close="handleTaskDialogClose"
    />

    <el-table
        :data="taskList"
        style="width: 100%"
        :row-class-name="tableRowClassName"
    >
        <el-table-column prop="title" label="事项" width="180" />
        <el-table-column prop="content" label="规划" width="180" />
        <el-table-column prop="expire" label="截止日期" width="180" />
    </el-table>
</template>

<style lang="scss" scoped>
@use '@/styles/common.scss' as *;

.plan-heander {
    @include flex-right;
}

.el-table :deep(.done) {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table :deep(.expired) {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
