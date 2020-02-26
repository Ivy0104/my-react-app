import {getModule} from '../utils/require-context'

const context = require.context('../store', false, /\.js$/)

let store = {}
context.keys().forEach(key => {
  const {name} = getModule('js', key)
  store[name] = context(key).default || context(key)
})

export default store