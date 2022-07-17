/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 19:20:56
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 19:21:39
 * @FilePath: \iAccount\src\types\utils.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Pickout<K, T extends keyof K> = K[T]
