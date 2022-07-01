import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/项目/2022开发项目/自定义组件库/自定义API文档vuepress/APIDocumentationVuePress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/项目/2022开发项目/自定义组件库/自定义API文档vuepress/APIDocumentationVuePress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
