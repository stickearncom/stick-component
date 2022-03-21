<template>
  <div>
    <section id="components-grid-demo-flex-order" class="code-box expand">
      <section class="code-box-demo">
        <div>
          <SCRow type="flex">
            <SCCol :span="6" :order="4">
              1 col-order-4
            </SCCol>
            <SCCol :span="6" :order="3">
              2 col-order-3
            </SCCol>
            <SCCol :span="6" :order="2">
              3 col-order-2
            </SCCol>
            <SCCol :span="6" :order="1">
              4 col-order-1
            </SCCol>
          </SCRow>
        </div>
      </section>
      <section class="code-box-meta markdown">
        <h4 id="Flex-Order">
          Flex Order <a href="#Flex-Order" class="anchor">#</a>
        </h4>
        <p>To change the element sort by Flex layout order.</p>
        <div class="code-box-actions">
          <div class="code-box-actions">
            <span class="code-expand-icon">
              <img
                v-if="!showCode"

                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                class="code-expand-icon-show"
                @click="showCode = true"
              >
              <img
                v-else

                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                class="code-expand-icon-hide"
                @click="showCode = false"
              >
            </span>
          </div>
        </div>
      </section>
      <section
        v-if="showCode"
        class="highlight-wrapper"
        style="position: relative"
      >
        <pre class="bg-gray-2 px-2"><code class="language-html">
&lt;template&gt;
  &lt;div&gt;
    &lt;SCRow type=&quot;flex&quot;&gt;
      &lt;SCCol :span=&quot;6&quot; :order=&quot;4&quot;&gt;
        1 col-order-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;6&quot; :order=&quot;3&quot;&gt;
        2 col-order-3
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;6&quot; :order=&quot;2&quot;&gt;
        3 col-order-2
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;6&quot; :order=&quot;1&quot;&gt;
        4 col-order-1
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </section>
    </section>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

export default {
  name: 'FlexOrder',
  components: {
    SCRow,
    SCCol
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style>
</style>
