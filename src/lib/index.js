import SlideVerify from './slide-verify.vue'

SlideVerify.install = function (Vue) {
    Vue.component(SlideVerify.name, SlideVerify)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}

export default SlideVerify
