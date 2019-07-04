# zvi 基于vue-cli3移动UI库
----

### 安装

```bash
npm i zvi --save-dev
```

### 使用
#### 全局注册

```js
// 项目入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zvi from 'zvi' // 引入组件库

Vue.config.productionTip = false
Vue.use(zvi) // 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```
#### 局部注册

```js
import { Button, Input } from 'zvi';

Vue.use(Button.name, Button)
Vue.use(Input.name, Input)

// 使用
<template>
  <z-button class="primary"></z-button>
</template>
// ……略
```

### 项目目录

```
|-- zvi
    |-- README.md
    |-- vue.config.js // vue-cli扩展配置
    |-- dist // build生成打包目录
    |-- package // npm 打包发布目录
    |-- site // 静态文档网站目录
    |   |-- App.vue // 根文件
    |   |-- main.js // 入口
    |   |-- router // 路由
    |   |-- components // 组件 
    |   |-- common // 文档站公用资源
    |-- libs // 组件库
    |   |-- index.js // 入口文件
    |   |-- components // 组件库源码
    |   |-- styles // 组件公用样式    
    |   |-- utils // 组件工具函数
    |-- public // 项目公共静态资源
    |   |-- favicon.ico // favicon
    |   |-- index.html // 模板
    |-- tests // 单元测试
        |-- unit
            |-- .eslintrc.js
            |-- example.spec.js
……略

```
