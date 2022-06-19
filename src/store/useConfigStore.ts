/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:32
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 11:15:45
 * @FilePath: \iAccount\src\store\useConfigStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { useConfig } from '@/hooks/useConfig'

export const useConfigStore = defineStore('configStore', useConfig)
