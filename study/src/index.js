import Vue from 'vue'   // 引入vue模块
import App from './app.vue'  //引入文件(组件) app

new Vue({                //vue写法 新建一个实例
  el:"#app",             //元素  
  template:'<App/>',  // 模板使用标签<app/>
  components:{App}   // 组件app
})