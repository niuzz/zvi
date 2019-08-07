import './font'

import button from '&/components/button'

const components = [
  button
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  button
}

export default {
  install,
  button
}
