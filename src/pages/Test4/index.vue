<template>
    <el-form :model="formModel" :label-width="100" v-loading="getLoading">
        <el-form-item label="aaa">
            <AField field-type="text" v-model="formModel.name" clearable />
        </el-form-item>

        <el-form-item label="bbb">
            <AField
                field-type="select"
                v-model="formModel.gender"
                :options="[
                    { value: 1, label: 'asdsf' },
                    { value: 2, label: 'okmnj' },
                ]"
            />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" :loading="postLoading" @click="onSave">
                submit
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import AField from '@/components/AField/index.vue'
import { useTask } from '@/hooks/useTask'
import { getApi, saveApi } from '@/api'

const formModel = reactive({
    name: '123',
    gender: 1,
})

const { loading: getLoading } = useTask(getApi)

const { loading: postLoading, run: post } = useTask(saveApi, { mamual: true })

const onSave = () => {
    post(formModel)
}
</script>

<style lang="scss" scoped></style>
