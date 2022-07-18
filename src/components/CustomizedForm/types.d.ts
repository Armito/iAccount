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
    formItemProps: { label: string; path: string; [key: string]: any }
    dataItemProps?: { options?: Option[]; [key: string]: any }
}
