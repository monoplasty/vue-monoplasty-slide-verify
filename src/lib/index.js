import SlideVerify from './slide-verify.vue'

const plugins = {
  install(Vue) {
      Vue.component(SlideVerify.name, SlideVerify)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(SlideVerify)
}

export default plugins
