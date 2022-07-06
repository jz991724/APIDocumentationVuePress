import {defineClientConfig} from '@vuepress/client';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export default defineClientConfig({
    enhance({app, router, siteData}) {
        // @ts-ignore
        app.config.productionTip = false;
        app.use(Antd);
    },
    setup() {
    },
    rootComponents: [],
})
