/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-18 09:10:11
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 12:05:30
 * @FilePath: \iAccount\src\utils\excel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as fs from 'fs'
import xlsx from 'node-xlsx'

type ExcelData = {
    name: string
    data: [string, string, string, string][]
}[]

export const useExcel = () => {
    const readExcel = (
        fileName: string,
        callback: (data: Account[]) => void,
    ) => {
        try {
            const data = xlsx.parse(`./${fileName}.xls`)
            callback(transformToRenderData(data as ExcelData))
        } catch (err) {
            callback([])
        }
    }

    const writeExcel = (
        fileName: string,
        data: Account[],
        callback?: () => void,
    ) => {
        const _buffer = xlsx.build(transformToExcelData(data))
        fs.writeFile(`./${fileName}.xls`, _buffer, (err) => {
            if (err) {
                throw err
            }
            callback?.()
        })
    }

    const transformToExcelData = (rawData: Account[]) => {
        return rawData.reduce(
            (pre, cur) => {
                return [
                    {
                        name: 'sheet1',
                        data: [...pre[0].data, [...Object.values(cur)]],
                        options: {},
                    },
                ]
            },
            [
                {
                    name: 'sheet1',
                    data: [['ID', 'App', '账号', '密码']],
                    options: {},
                },
            ],
        )
    }

    const transformToRenderData = (rawData: ExcelData) => {
        return rawData[0].data
            .filter((_, idx) => idx !== 0)
            .map((a) => {
                return {
                    id: a[0],
                    appName: a[1],
                    account: a[2],
                    password: a[3],
                }
            })
    }

    return {
        readExcel,
        writeExcel,
    }
}
