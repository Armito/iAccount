/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-19 10:40:05
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 11:59:48
 * @FilePath: \iAccount\src\hooks\useConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
import * as fs from 'fs'
import _config from '../../iAccount.config.json'

export const useConfig = () => {
    const config = ref<Config>(_config)

    const getConfig = () => {
        return {
            config: config.value || 'Armito Niubi',
        }
    }

    const setConfig = (newconfig: Config, callback?: () => void) => {
        config.value = {
            ...config.value,
            ...newconfig,
        }

        const configStr = JSON.stringify(config.value)

        fs.writeFile('./iAccount.config.json', configStr, (err) => {
            if (err) {
                return callback?.()
            }
            callback?.()
        })
    }

    return {
        getConfig,
        setConfig,
    }
}