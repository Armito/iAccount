import { DatePickerType } from 'naive-ui/es/date-picker/src/config'
import { FormItemProps } from 'naive-ui'

export type AFormDataItemProps_type =
    | 'custom'
    | 'text'
    | 'textarea'
    | 'password'
    | 'radio'
    | DatePickerType

export type AFormDataItemProps_value = any

export type AFormDataItemProps_dataItemProps = Record<string, unknown>

export interface AFormDataItemProps extends FormItemProps {
    /** 数据录入框类型 */
    type: AFormDataItemProps_type
    /** 数据录入框初始值 */
    value?: AFormDataItemProps_value
    /** 数据录入框属性 */
    dataItemProps?: AFormDataItemProps_dataItemProps
}
