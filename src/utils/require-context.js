import {camelCase} from 'camel-case'

/**
 * @param {string} type - 模块类型，例如js，vue等
 * @param {string} key - require.context获取的key
 * @returns {Object<path, name>} - path-模块的路径，name-模块名称
 */
export const getModule = (type, key) => {
  const reg = new RegExp(`.${type}$`, 'ig')
  const path = key.replace(/^(.\/)/, '').replace(reg, '')
  return {
    path,
    name: camelCase(
      (keys => {
        const i = keys.length - 1
        return keys[i] === 'index' ? keys[i - 1] : keys[i]
      })(path.split('/'))
    )
  }
}