import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 按需导入 $http 对象
import { $http } from '@escook/request-miniprogram'
// import { showToast } from './common/common.js'
import * as getters from './common/common.js'
//导入store的实例对象
import store from './store/store.js'

uni.$http = $http
uni.$showMsg = getters.showToast

$http.baseUrl = "https://www.uinav.com"

// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  wx.showLoading({
    title: '数据加载中...',
  })
}

// 请求完成之后做一些事情
$http.afterRequest = function () {
  wx.hideLoading()
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	//将store挂载到vue实例上
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif