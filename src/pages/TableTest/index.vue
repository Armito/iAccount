<script lang="tsx" setup>
import { FunctionalComponent } from 'vue'
import { CheckboxProps } from 'element-plus'
import { ATable } from '@/components/ACompoents'
import { ATableProps } from '@/components/ACompoents/types'

interface CheProps extends Partial<CheckboxProps> {
    isAll: boolean
}

const Che: FunctionalComponent<CheProps> = (props) => <el-checkbox {...props} />

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `Column ${columnIndex}`,
        width: 150,
    }))

const generateData = (
    columns: ReturnType<typeof generateColumns>,
    length = 200,
    prefix = 'row-',
) =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
                return rowData
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null,
            },
        )
    })

const columns: Pickout<ATableProps, 'columns'> = generateColumns(5)
columns.unshift({
    key: `check`,
    width: 50,
    cellRenderer: () => <Che isAll={false} />,
})
const data = generateData(columns, 898)

const request: Pickout<ATableProps, 'request'> = (params) => {
    return new Promise((resolve) => {
        console.log(params)
        setTimeout(() => {
            resolve({
                data: data,
                total: data.length,
            })
        }, 1000)
    })
}
</script>

<template>
    <div style="height: 400px; width: 600px">
        <ATable
            :columns="columns"
            fixed
            :request="request"
            :pagination-props="{ currentPage: 3, pageSize: 100 }"
        />
    </div>
</template>

<style lang="scss" scoped></style>
