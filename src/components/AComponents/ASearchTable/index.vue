<script lang="ts">
export default {
    name: 'SearchTable',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs, reactive } from 'vue'
import {
    NDataTable,
    DataTableProps,
    DataTableColumn,
    NForm,
    FormProps,
    NFormItem,
    NSpace,
    NButton,
} from 'naive-ui'
import AFormDataItem, { AFormDataItemProps } from '../AFormDataItem/index.vue'
import { useASearchTable } from './hooks'

export type Column<T = { [key: string]: unknown }> = DataTableColumn<T> & {
    dataIndex: string
    search?: boolean
    formItemProps: AFormDataItemProps
    value?: any
}
export type Pagination = Pickout<DataTableProps, 'pagination'>
export type Request = (
    params: { page: number; pageSize: number } & {
        [key: string]: unknown
    },
) => Promise<{ data: any[]; total: number }>

export interface SearchTableProps
    extends Omit<DataTableProps, 'loading' | 'data' | 'remote' | 'columns'> {
    /** 接管columns */
    columns: Column[]
    /** 搜索表单的form属性 */
    formProps?: FormProps
    /** 外部loading */
    loading?: boolean
    /** 接管pagination */
    pagination?: Pagination
    /** 数据请求 */
    request: Request
}

export interface SearchTableEmits {
    (event: 'update:value', payload: any): void
}

const attrs = useAttrs()

const props = defineProps<SearchTableProps>()

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
} = useASearchTable(props)
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
        :on-update:pageSize="onUpdatePageSize"
    />
</template>

<style lang="less" scoped></style>
