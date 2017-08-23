import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import 'mint-ui/lib/style.css'
import './config/rem'
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueResource);           //use（）使用插件,导入json文件需要
Vue.config.productionTip = false//在应用启动时，可以通过设置这条来关闭生产模式下给出的提示
Vue.use(MintUI);      			//使用了MintUI插件
Vue.use(ElementUI);   			//使用了ElementUI插件


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


