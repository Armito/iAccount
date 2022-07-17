/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 18:22:49
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 19:41:13
 * @FilePath: \iAccount\src\components\ARadio\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FunctionalComponent } from 'vue'
import {
    NRadioGroup,
    NRadio,
    NSpace,
    RadioGroupProps,
    RadioProps,
} from 'naive-ui'

interface ARadioProps extends RadioGroupProps {
    options: RadioProps[]
}

interface ARadioEmits {
    'update:value': () => any
}

const ARadio: FunctionalComponent<ARadioProps> = (props, { emit }) => {
    const { value, options, ...otherProps } = props

    const onChange = () => {
        emit('update:value')
    }

    return (
        <NRadioGroup value={value} onUpdateValue={onChange} {...otherProps}>
            <NSpace>
                {props.options.map((option) => (
                    <NRadio key={option.value} v-bind="option" />
                ))}
            </NSpace>
        </NRadioGroup>
    )
}

export default ARadio
