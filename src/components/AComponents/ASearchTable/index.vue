<script lang="ts">
export default {
    name: 'SearchTable',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs, toRefs, ref } from 'vue'
import { NDataTable, DataTableProps } from 'naive-ui'

interface SearchTableProps extends Omit<DataTableProps, 'loading' | 'data'> {
    /** 外部loading */
    loading?: boolean
    /** 数据请求 */
    request: () => Promise<{ data: any[]; total: number }>
}
const props = defineProps<SearchTableProps>()

const attrs = useAttrs()
console.log(attrs)

interface SearchTableEmits {
    (event: 'update:value', payload: any): void
}
const emits = defineEmits<SearchTableEmits>()

const { request, loading: externalLoading } = toRefs(props)
const data = ref<any[]>([])
const innerLoading = ref(false)
const result = await request.value()
data.value = result.data
</script>

<template>
    <n-data-table
        v-bind="attrs"
        :data="data"
        :loading="externalLoading || innerLoading"
    />
</template>

<style lang="less" scoped></style>
