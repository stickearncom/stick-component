<template>
  <div>
    <section
      id="components-grid-demo-flex-alignment"
      class="code-box"
    >
      <section class="code-box-demo">
        <div>
          <p>Align Top</p>
          <SCRow
            type="flex"
            justify="center"
            align="top"
          >
            <SCCol :span="4">
              <p class="height-100">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-50">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-120">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-80">
                col-4
              </p>
            </SCCol>
          </SCRow>

          <p>Align Center</p>
          <SCRow
            type="flex"
            justify="space-around"
            align="middle"
          >
            <SCCol :span="4">
              <p class="height-100">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-50">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-120">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-80">
                col-4
              </p>
            </SCCol>
          </SCRow>

          <p>Align Bottom</p>
          <SCRow
            type="flex"
            justify="space-between"
            align="bottom"
          >
            <SCCol :span="4">
              <p class="height-100">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-50">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-120">
                col-4
              </p>
            </SCCol>
            <SCCol :span="4">
              <p class="height-80">
                col-4
              </p>
            </SCCol>
          </SCRow>
        </div>
      </section>
      <section class="code-box-meta markdown">
        <h4 id="Flex-Alignment">
          Flex Alignment
          <a

            href="#Flex-Alignment"
            class="anchor"
          >#</a>
        </h4>
        <p>
          Flex child elements vertically aligned.
        </p>
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

      <section v-if="showCode" class="highlight-wrapper">
        <pre class="bg-gray-2 px-2">
          <code class="language-html">
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Align Top&lt;/p&gt;
    &lt;SCRow
      type=&quot;flex&quot;
      justify=&quot;center&quot;
      align=&quot;top&quot;
    &gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-100&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-50&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-120&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-80&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;Align Center&lt;/p&gt;
    &lt;SCRow
      type=&quot;flex&quot;
      justify=&quot;space-around&quot;
      align=&quot;middle&quot;
    &gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-100&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-50&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-120&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-80&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;Align Bottom&lt;/p&gt;
    &lt;SCRow
      type=&quot;flex&quot;
      justify=&quot;space-between&quot;
      align=&quot;bottom&quot;
    &gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-100&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-50&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-120&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        &lt;p class=&quot;height-80&quot;&gt;
          col-4
        &lt;/p&gt;
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;
  &lt;/div&gt;
&lt;/template&gt;</code>
        </pre>
      </section>
    </section>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

export default {
  name: 'FlexAlign',
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
