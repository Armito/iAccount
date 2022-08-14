import { AFormDataItemProps } from '@/components/AComponents/AFormDataItem/types'
import { FormProps } from 'naive-ui'

export interface ACustomizedFormProps_field
    extends Omit<AFormDataItemProps, 'path'> {
    id: string | number
    path: string
}

export interface ACustomizedFormProps extends FormProps {
    fields: ACustomizedFormProps_field[]
}
