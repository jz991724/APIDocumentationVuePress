<template><div><h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h2>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>git status</td>
<td>List all new or modified files</td>
</tr>
<tr>
<td>git diff</td>
<td>Show file differences that haven't been staged</td>
</tr>
</tbody>
</table>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/guide/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<h2 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2>
<p>VuePress 2 已经发布 🎉 ！</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3>
<nav class="table-of-contents"><ul><li><RouterLink to="#table">table</RouterLink></li><li><RouterLink to="#链接">链接</RouterLink></li><li><RouterLink to="#图标">图标</RouterLink></li><li><RouterLink to="#目录">目录</RouterLink><ul><li><RouterLink to="#三级标题">三级标题</RouterLink></li></ul></li><li><RouterLink to="#代码块">代码块</RouterLink></li><li><RouterLink to="#添加-v-pre">添加 v-pre</RouterLink></li><li><RouterLink to="#导入代码块">导入代码块</RouterLink></li><li><RouterLink to="#在-markdown-中使用-vue">在 Markdown 中使用 Vue</RouterLink><ul><li><RouterLink to="#模板语法">模板语法</RouterLink></li><li><RouterLink to="#组件">组件</RouterLink></li><li><RouterLink to="#内置组件">内置组件</RouterLink></li><li><RouterLink to="#codegroup">CodeGroup</RouterLink></li></ul></li><li><RouterLink to="#图片">图片</RouterLink></li></ul></nav>
<h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

#行数范围标记的例子：
#行数范围： <span class="token punctuation">{</span><span class="token number">5</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">}</span>
#多个单行： <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
#组合： <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token operator">-</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token operator">-</span><span class="token number">27</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加-v-pre" tabindex="-1"><a class="header-anchor" href="#添加-v-pre" aria-hidden="true">#</a> 添加 v-pre</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h2>
<p>你可以使用下面的语法，从文件中导入代码块：</p>
<!-- 最简单的语法 -->
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defaultTheme<span class="token punctuation">,</span> defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'工具函数API'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'工作中常用函数及组件'</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@images'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./public/images'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> <span class="token string">'/APIDocumentationVuePress/'</span><span class="token punctuation">,</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// anchor: false,//去除锚点链接跳转</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 添加导航栏</span>
        navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">'主页'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/guide/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">'生活'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/life/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// // 为以下路由添加左侧边栏</span>
        <span class="token comment">// sidebar: {</span>
        <span class="token comment">//     '/reference/': [</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'VuePress Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/cli.md', '/reference/config.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'Bundlers Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//     ],</span>
        <span class="token comment">// },</span>
        <span class="token comment">// sidebarDepth: 2,//左侧导航显示的层级</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你只想导入这个文件的一部分：</p>
<!-- 仅导入第 1 行至第 10 行 -->
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defaultTheme<span class="token punctuation">,</span> defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'工具函数API'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'工作中常用函数及组件'</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@images'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./public/images'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p>
<!-- 指定代码语言 -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defaultTheme<span class="token punctuation">,</span> defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'工具函数API'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'工作中常用函数及组件'</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@images'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./public/images'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/APIDocumentationVuePress/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// anchor: false,//去除锚点链接跳转</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 添加导航栏</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'主页'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'生活'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/life/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// // 为以下路由添加左侧边栏</span>
        <span class="token comment">// sidebar: {</span>
        <span class="token comment">//     '/reference/': [</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'VuePress Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/cli.md', '/reference/config.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'Bundlers Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//     ],</span>
        <span class="token comment">// },</span>
        <span class="token comment">// sidebarDepth: 2,//左侧导航显示的层级</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持：</p>
<!-- 行高亮 -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defaultTheme<span class="token punctuation">,</span> defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'工具函数API'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'工作中常用函数及组件'</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@images'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./public/images'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/APIDocumentationVuePress/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// anchor: false,//去除锚点链接跳转</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 添加导航栏</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'主页'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'生活'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/life/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// // 为以下路由添加左侧边栏</span>
        <span class="token comment">// sidebar: {</span>
        <span class="token comment">//     '/reference/': [</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'VuePress Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/cli.md', '/reference/config.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         {</span>
        <span class="token comment">//             text: 'Bundlers Reference',</span>
        <span class="token comment">//             collapsible: true,</span>
        <span class="token comment">//             children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//     ],</span>
        <span class="token comment">// },</span>
        <span class="token comment">// sidebarDepth: 2,//左侧导航显示的层级</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-markdown-中使用-vue" tabindex="-1"><a class="header-anchor" href="#在-markdown-中使用-vue" aria-hidden="true">#</a> 在 Markdown 中使用 Vue</h2>
<h3 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h3>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
<h3 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h3>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
<h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2>
<p><img src="@images/logo.png" alt=""></p>
</div></template>
