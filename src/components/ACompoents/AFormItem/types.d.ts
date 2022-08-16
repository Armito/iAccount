import { FormItemProps } from 'element-plus'
import { InputProps } from 'element-plus'
import { ARadioProps } from '../types'

export type AFormItemProps_type = 'text' | 'textarea' | 'password' | 'radio'
export type AFormItemProps_modelValue = any
export type AFormItemProps_fieldProps =
    | Partial<InputProps>
    | Partial<ARadioProps>

export interface AFormItemProps extends Partial<FormItemProps> {
    type: AFormItemProps_type
    modelValue?: AFormItemProps_modelValue
    fieldProps: AFormItemProps_fieldProps
}
