import { FormItemProps, InputProps, DatePickerProps } from 'naive-ui'
import { ARadioProps } from '../ARadio/types'

type TYPE_Custom = 'custom'
type TYPE_Input = Pickout<Required<InputProps>, 'type'>
type TYPE_Radio = 'radio'
type TYPE_DatePicker = Pickout<Required<DatePickerProps>, 'type'>

export type AFormDataItemTyps =
    | TYPE_Custom
    | TYPE_Input
    | TYPE_Radio
    | TYPE_DatePicker

export type AFormDataItemProps_type<T extends AFormDataItemTyps> = T
export type AFormDataItemProps_value = any
export type AFormDataItemProps_dataItemProps<T extends AFormDataItemTyps> =
    T extends TYPE_Input
        ? InputProps
        : T extends TYPE_Radio
        ? ARadioProps
        : T extends TYPE_DatePicker
        ? DatePickerProps
        : Record<string, unknown>

export interface FormDataItemProps<T extends AFormDataItemTyps>
    extends FormItemProps {
    /** 数据录入框类型 */
    type: AFormDataItemProps_type<T>
    /** 数据录入框初始值 */
    value?: AFormDataItemProps_value
    /** 数据录入框属性 */
    dataItemProps?: AFormDataItemProps_dataItemProps<T>
}

export type AFormDataItemProps = FormDataItemProps<
    | 'custom'
    | 'text'
    | 'password'
    | 'textarea'
    | 'radio'
    | 'date'
    | 'daterange'
    | 'datetime'
    | 'datetimerange'
    | 'month'
    | 'year'
    | 'quarter'
    | 'monthrange'
    | 'yearrange'
    | 'quarterrange'
>
