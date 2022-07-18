import { DatePickerType } from 'naive-ui/es/date-picker/src/config'

export type CustomizedFieldType = 'Text' | 'Radio' | 'Date' | 'Datetime'

export interface Option {
    value: any
    label: string
    [index: string]: any
}

export interface CustomizedField {
    id: string | number
    type: CustomizedFieldType
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
        type?: DatePickerType
        [key: string]: any
    }
}
