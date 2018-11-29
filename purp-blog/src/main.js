import DefaultLayout from '~/layouts/Default.vue'
import Lightbox from "vue-pure-lightbox";
import vueSmoothScroll from "vue2-smooth-scroll";
import inViewportDirective from "vue-in-viewport-directive";

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.directive("in-viewport", inViewportDirective);
  Vue.use(vueSmoothScroll);
  Vue.use(Lightbox);
  Vue.config.productionTip = false;
}









