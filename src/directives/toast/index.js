import Vue from 'vue'
import toastTpl from './tpl.vue'

const toast = function (msg) {
  // 创建 toast dom
  const MessageBoxConstructor = Vue.extend(toastTpl)
  const initInstance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  // 创建好之后，进行 msg 和提示类型设置
  initInstance.msg = msg
  // 插入 toast dom
  document.body.appendChild(initInstance.$el)
  // 设置倒计时4000ms 删除 toast 节点
  setTimeout(() => {
    document.body.removeChild(initInstance.$el)
  }, 3000)
}

export default toast
