import {defaultTheme, defineUserConfig} from 'vuepress'
import * as path from "path";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '工具函数API',
    description: '工作中常用函数及组件',
    // pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
    alias: {
        '@images': path.resolve(__dirname, './public/images'),
    },
    base: '/APIDocumentationVuePress/',
    markdown: {
        // anchor: false,//去除锚点链接跳转
    },
    theme: defaultTheme({
        // 添加导航栏
        navbar: [
            {text: '主页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: '生活', link: '/life/'},
        ],
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/reference/': [
                {
                    text: 'Reference',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
    }),
})
