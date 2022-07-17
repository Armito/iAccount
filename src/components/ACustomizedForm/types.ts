/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-16 12:21:52
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 11:03:18
 * @FilePath: \iAccount\src\components\ACustomizedForm\types.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FormItemProps } from 'element-plus/es/components/form/src/form-item'
import { InputProps } from 'element-plus/es/components/input/src/input'
import { InputNumberProps } from 'element-plus/es/components/input-number/src/input-number'

export enum CustomizedFieldType {
    Text = 'text',
    Number = 'number',
    Radio = 'radio',
}

export interface CustomizedField {
    id: string | number
    type: CustomizedFieldType
    label: string
    key: string
    value?: any
    formItemProps?: Partial<FormItemProps>
    dataItemProps?: Partial<InputProps | InputNumberProps>
}
