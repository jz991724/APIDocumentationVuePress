---
lang: zh-CN 
title: 指南
description: 指南
---

## table

<a-button type="primary">新闻</a-button>


```html
<a-button>测试</button>
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

## 链接

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)
<!-- URL -->
[GitHub](https://github.com)

## 图标

VuePress 2 已经发布 :tada: ！

## 目录

### 三级标题

[[toc]]

## 代码块

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})

#行数范围标记的例子：
#行数范围： {5-8}
#多个单行： {4,7,9}
#组合： {4,7-13,16,23-27,40}
```

## 添加 v-pre

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

## 导入代码块

你可以使用下面的语法，从文件中导入代码块：

<!-- 最简单的语法 -->
@[code](../.vuepress/config.ts)
如果你只想导入这个文件的一部分：

<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](../.vuepress/config.ts)
代码语言会根据文件扩展名进行推断，但我们建议你显式指定：

<!-- 指定代码语言 -->
@[code js](../.vuepress/config.ts)
实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持：

<!-- 行高亮 -->
@[code js{2,4-5}](../.vuepress/config.ts)

## 在 Markdown 中使用 Vue

### 模板语法

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

### 组件

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

### 内置组件

[参考](https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html)

### CodeGroup
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

## 图片

![](@images/logo.png)
