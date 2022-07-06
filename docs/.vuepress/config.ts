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
    rightMenuBar: true,
    theme: defaultTheme({
        // 添加导航栏
        navbar: [
            {text: '主页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: '生活', link: '/life/'},
        ],
        // // 为以下路由添加左侧边栏
        // sidebar: {
        //     '/reference/': [
        //         {
        //             text: 'VuePress Reference',
        //             collapsible: true,
        //             children: ['/reference/cli.md', '/reference/config.md'],
        //         },
        //         {
        //             text: 'Bundlers Reference',
        //             collapsible: true,
        //             children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        //         },
        //     ],
        // },
        // sidebarDepth: 2,//左侧导航显示的层级
    }),
})
