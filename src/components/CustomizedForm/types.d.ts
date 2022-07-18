/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 12:25:08
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-18 21:39:23
 * @FilePath: \iAccount\src\components\CustomizedForm\types.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
