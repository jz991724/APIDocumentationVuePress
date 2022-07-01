import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
    markdown: {
        anchor: false,//去除锚点链接跳转
    }
})
