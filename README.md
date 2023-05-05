# Vue 3 + Vite + NutUI

## 注意
- vite配置文件指南：https://cn.vitejs.dev/config/server-options.html
- vue3+vite默认不支持使用`require`
- 使用京东nutui  https://nutui.jd.com/h5/vue/4x/#/zh-CN/guide/official-theme
- 图片都放置在public下，全路径引用。如：
```css
.lost-page {
  width: 30vw;
  height: 20vw;
  background: url('/public/images/404.jpg') no-repeat;
  background-size: 100% 100%;
}
```
- 自定义组件写在src/components, 声明组件name，global.js会默认注册
- 全局样式文件，src/style.css
- 全局拦截器，src/service/api.js，全局报错交互未添加，可用NutUI组件，自行增加。报错拦截的code根据不同项目，自行调整。
- 404页面src/pages/404.vue，跳转的时机根据业务自定义
- 混入的数据和方法src/plugins/mixin/mixin.js，一些工具方法和公共数据可以直接定义在这里。
- `@`默认不支持，不会转成`src/`
- import引入组件路径最后不能省略.vue
