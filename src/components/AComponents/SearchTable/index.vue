<script lang="ts">
export default {
    name: 'SearchTable',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import {
    NDataTable,
    DataTableProps,
    NForm,
    NFormItem,
    NSpace,
    NButton,
} from 'naive-ui'
import AFormDataItem from '../AFormDataItem/index.vue'
import {
    SearchTableProps_formProps,
    SearchTableProps_column,
    SearchTableProps_loading,
    SearchTableProps_request,
    SearchTableProps_manual,
    SearchTableProps_pagination,
} from './types'
import { useSearchTable } from './hooks'

const attrs = useAttrs()

interface SearchTableProps
    extends Omit<DataTableProps, 'loading' | 'data' | 'remote' | 'columns'> {
    formProps?: SearchTableProps_formProps
    columns: SearchTableProps_column[]
    loading?: SearchTableProps_loading
    request: SearchTableProps_request
    manual?: SearchTableProps_manual
    pagination?: SearchTableProps_pagination
}
const props = defineProps<SearchTableProps>()

interface SearchTableEmits {
    (event: 'update:value', payload: any): void
}
const emits = defineEmits<SearchTableEmits>()

const {
    data,
    loading,
    formRef,
    model,
    onReset,
    onSearch,
    pagination,
    onUpdatePage,
    onUpdatePageSize,
} = useSearchTable(props)
</script>

<template>
    <n-form v-bind="props.formProps" ref="formRef" :model="model">
        <AFormDataItem
            v-for="field in props.columns"
            v-bind="field.formItemProps"
            :key="field.dataIndex"
            v-model:value="model[field.dataIndex]"
        />
        <n-form-item>
            <n-space>
                <n-button attr-type="reset" @click="onReset"> 重置 </n-button>
                <n-button attr-type="submit" @click="onSearch"> 查询 </n-button>
            </n-space>
        </n-form-item>
    </n-form>

    <n-data-table
        v-bind="attrs"
        remote
        :columns="props.columns"
        :data="data"
        :loading="props.loading || loading"
        :pagination="props.pagination && pagination"
        :on-update:page="onUpdatePage"
        :on-update:page-size="onUpdatePageSize"
    />
</template>

<style lang="less" scoped></style>
