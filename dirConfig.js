const path = require('path')

const src = 'src'

/**
 * 文件目录名称
 * @namespace vars
 * @property {string} src - 开发目录
 * @property {string} data - 存放模拟数据json
 * @property {string} fonts - 存放字体文件
 * @property {string} images - 存放公用图片
 * @property {string} styles - 存放公用css样式文件
 * @property {string} views - 存放vue页面文件
 * @property {string} comps - 存放vue公用组件
 * @property {string} deploy - 引导配置项
 * @property {string} store - 存放vuex状态
 * @property {string} service - 存放api接口
 * @property {string} routes - vue路由页面配置
 * @property {string} utils - 存放公共工具方法
 */

const variables = {
  src,

  data: `data->${src}`,

  fonts: `fonts->${src}`,

  images: `images->${src}`,

  styles: `styles->${src}`,

  views: `views->${src}`,

  comps: `components->${src}`,

  deploy: `deploy->${src}`,

  store: `store->${src}`,

  service: `service->${src}`,

  routes: `routes->${src}`,

  utils: `utils->${src}`,

  hooks: `hooks->${src}`
}

const dirs = {}
const varToDir = variable => fn => fn(variable.split('->'));
const getDir = x => path.join(__dirname, x[1] || '', x[0]);
Object.keys(variables).forEach(key => {
  dirs[key] = varToDir(variables[key])(getDir);
});

module.exports = dirs


