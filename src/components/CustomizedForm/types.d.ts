import { AFormDataItemProps } from '@/components/AComponents/AFormDataItem/index.vue'

export interface Option {
    value: any
    label: string
    [index: string]: any
}

export interface CustomizedField {
    id: string | number
    type: Pickout<AFormDataItemProps, 'type'>
    key: string
    value?: any
    formItemProps: {
        label: string
        path: string
        required?: boolean
        [key: string]: any
    }
    dataItemProps?: {
        disabled?: boolean
        options?: Option[]
        [key: string]: any
    }
}
