<template><div><h2>table</h2>
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
<h2>链接</h2>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/guide/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<h2>图标</h2>
<p>VuePress 2 已经发布 🎉 ！</p>
<h2>目录</h2>
<h3>三级标题</h3>
<nav class="table-of-contents"><ul><li><RouterLink to="#table">table</RouterLink></li><li><RouterLink to="#链接">链接</RouterLink></li><li><RouterLink to="#图标">图标</RouterLink></li><li><RouterLink to="#目录">目录</RouterLink><ul><li><RouterLink to="#三级标题">三级标题</RouterLink></li></ul></li><li><RouterLink to="#代码块">代码块</RouterLink></li><li><RouterLink to="#添加-v-pre">添加 v-pre</RouterLink></li><li><RouterLink to="#导入代码块">导入代码块</RouterLink></li><li><RouterLink to="#在-markdown-中使用-vue">在 Markdown 中使用 Vue</RouterLink><ul><li><RouterLink to="#模板语法">模板语法</RouterLink></li><li><RouterLink to="#组件">组件</RouterLink></li><li><RouterLink to="#内置组件">内置组件</RouterLink></li><li><RouterLink to="#codegroup">CodeGroup</RouterLink></li></ul></li></ul></nav>
<h2>代码块</h2>
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
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2>添加 v-pre</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2>导入代码块</h2>
<p>你可以使用下面的语法，从文件中导入代码块：</p>
<!-- 最简单的语法 -->
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
    pagePatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.md'</span><span class="token punctuation">,</span> <span class="token string">'!**/README.md'</span><span class="token punctuation">,</span> <span class="token string">'!.vuepress'</span><span class="token punctuation">,</span> <span class="token string">'!node_modules'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        anchor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//去除锚点链接跳转</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你只想导入这个文件的一部分：</p>
<!-- 仅导入第 1 行至第 10 行 -->
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
    pagePatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.md'</span><span class="token punctuation">,</span> <span class="token string">'!**/README.md'</span><span class="token punctuation">,</span> <span class="token string">'!.vuepress'</span><span class="token punctuation">,</span> <span class="token string">'!node_modules'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        anchor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//去除锚点链接跳转</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p>
<!-- 指定代码语言 -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pagePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.md'</span><span class="token punctuation">,</span> <span class="token string">'!**/README.md'</span><span class="token punctuation">,</span> <span class="token string">'!.vuepress'</span><span class="token punctuation">,</span> <span class="token string">'!node_modules'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//去除锚点链接跳转</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持：</p>
<!-- 行高亮 -->
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pagePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.md'</span><span class="token punctuation">,</span> <span class="token string">'!**/README.md'</span><span class="token punctuation">,</span> <span class="token string">'!.vuepress'</span><span class="token punctuation">,</span> <span class="token string">'!node_modules'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//去除锚点链接跳转</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2>在 Markdown 中使用 Vue</h2>
<h3>模板语法</h3>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<h3>组件</h3>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
<h3>内置组件</h3>
<p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
<h3>CodeGroup</h3>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
</div></template>
