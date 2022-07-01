export const data = JSON.parse("{\"key\":\"v-13925e64\",\"path\":\"/Test/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"Test/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
