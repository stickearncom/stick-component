<template>
  <div>
    <SCRow>
      <SCCol :span="24" class="markdown">
        <h6>Example: </h6>
        <pre><code class="language-html">&lt;SCIcon type="user-circle-solid" /&gt;</code></pre>
      </SCCol>
    </SCRow>
    <SCRow
      type="flex"
      justify="center"
      align="middle"
      :gutter="[16, 32]"
    >
      <SCCol
        v-for="(icon, index) in icons"
        :key="index"
        :span="4"
        class="text-center"
      >
        <h3><SCIcon :type="icon.name" /></h3>
        <div class="mt-2">
          {{ icon.name }}
        </div>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'
import SCIcon from '../index.vue'

import icons from './iconsList'

export default {
  name: 'SEIconExample',
  components: {
    SCRow,
    SCCol,
    SCIcon
  },
  data() {
    return {
      icons
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 32px;
  line-height: 24px;
}

.markdown pre {
  border-radius: 2px;
  background: #f2f4f5;
  font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  overflow: auto;
  display: block;
}

.markdown pre code {
  border: none;
  background: #f2f4f5;
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #314659;
  overflow: auto;
  display: block;
}
pre>code[class*=lang-], pre>code[class*=language-] {
    padding: 12px 20px;
    overflow: auto;
}
code[class*=language-], pre[class*=language-], pre code {
    white-space: pre;
    font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
}
</style>
