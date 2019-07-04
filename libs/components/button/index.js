import button from './Button.vue'

button.install = function (Vue) {
  Vue.component(button.name, button)
}

button.name = 'z-button'

export default button
