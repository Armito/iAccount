import { RadioGroupProps, RadioProps as RadioItemProps } from 'naive-ui'

export type ARadioProps_options = RadioItemProps[]

export interface ARadioProps extends RadioGroupProps {
    options?: ARadioProps_options
}
