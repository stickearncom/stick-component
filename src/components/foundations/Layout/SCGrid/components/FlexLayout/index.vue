<template>
  <div>
    <section id="components-grid-demo-flex-layout" class="code-box">
      <section class="code-box-demo">
        <div>
          <p>sub-element align left</p>
          <SCRow type="flex" justify="start">
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
          </SCRow>

          <p>sub-element align center</p>
          <SCRow type="flex" justify="center">
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
          </SCRow>

          <p>sub-element align right</p>
          <SCRow type="flex" justify="end">
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
          </SCRow>

          <p>sub-element monospaced arrangement</p>
          <SCRow type="flex" justify="space-between">
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
          </SCRow>

          <p>sub-element align full</p>
          <SCRow type="flex" justify="space-around">
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
            <SCCol :span="4">
              col-4
            </SCCol>
          </SCRow>
        </div>
      </section>
      <section class="code-box-meta markdown">
        <h4 id="Flex-Layout">
          Flex Layout
          <a href="#Flex-Layout" class="anchor">#</a>
        </h4>
        <p>
          Use <code>row-flex</code> define <code>flex</code> layout, its child
          elements depending on the value of the <code>start</code>,<code>
            center</code>, <code>end</code>,<code> space-between</code>,
          <code>space-around</code>, which are defined in its parent node layout
          mode.
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
      <section
        v-if="showCode"
        class="highlight-wrapper"
      >
        <pre class="bg-gray-2 px-2"><code class="language-html">
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;sub-element align left&lt;/p&gt;
    &lt;SCRow type=&quot;flex&quot; justify=&quot;start&quot;&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;sub-element align center&lt;/p&gt;
    &lt;SCRow type=&quot;flex&quot; justify=&quot;center&quot;&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;sub-element align right&lt;/p&gt;
    &lt;SCRow type=&quot;flex&quot; justify=&quot;end&quot;&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;sub-element monospaced arrangement&lt;/p&gt;
    &lt;SCRow type=&quot;flex&quot; justify=&quot;space-between&quot;&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;

    &lt;p&gt;sub-element align full&lt;/p&gt;
    &lt;SCRow type=&quot;flex&quot; justify=&quot;space-around&quot;&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
      &lt;SCCol :span=&quot;4&quot;&gt;
        col-4
      &lt;/SCCol&gt;
    &lt;/SCRow&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
      </section>
    </section>
  </div>
</template>

<script>
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'

export default {
  name: 'FlexLayout',
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
