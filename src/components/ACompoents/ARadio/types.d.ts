import { RadioGroupProps, RadioProps } from 'element-plus'

export interface ARadioItemProps extends Partial<Omit<RadioProps, 'label'>> {
    label: Pickout<RadioProps, 'label'>
    text: string
}

export interface ARadioProps
    extends Partial<Omit<RadioGroupProps, 'modelValue'>> {
    modelValue?: Pickout<RadioGroupProps, 'modelValue'>
    options: ARadioItemProps[]
}
