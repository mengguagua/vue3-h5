import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// 扫描components下所有组件进行注册，优化import（build时按依赖引用也不会有冗余）
import globalComponents from './components/global'
import './service/api';
import {totalMixin} from './plugins/mixin/mixin';
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";


const app = createApp(App)

app.mixin(totalMixin)
app.use(globalComponents)
app.use(router)
app.use(NutUI)
app.mount('#app')
