<template>
  <div>
    <div id="components-grid-demo-all">
      <section id="components-grid-demo-basic-grid" class="code-box">
        <section class="code-box-demo">
          <SCRow>
            <SCCol :span="12">
              col-12
            </SCCol>
            <SCCol :span="12">
              col-12
            </SCCol>
          </SCRow>
          <SCRow>
            <SCCol :span="8">
              col-8
            </SCCol>
            <SCCol :span="8">
              col-8
            </SCCol>
            <SCCol :span="8">
              col-8
            </SCCol>
          </SCRow>
          <SCRow>
            <SCCol :span="6">
              col-6
            </SCCol>
            <SCCol :span="6">
              col-6
            </SCCol>
            <SCCol :span="6">
              col-6
            </SCCol>
            <SCCol :span="6">
              col-6
            </SCCol>
          </SCRow>
        </section>

        <section data-v-a1ccd506="" class="code-box-meta markdown">
          <h4 id="Basic-Grid" data-v-a1ccd506="">
            Basic Grid
            <a
              data-v-a1ccd506=""
              href="#Basic-Grid"
              class="anchor"
            >#</a>
          </h4>
          <p data-v-a1ccd506="">
            From the stack to the horizontal arrangement.<br
              data-v-a1ccd506=""
            >
            You can create a basic grid system by using a single set of
            <code data-v-a1ccd506="">Row</code> and
            <code data-v-a1ccd506="">Col</code> grid assembly, all of the
            columns (Col) must be placed in
            <code data-v-a1ccd506="">Row</code>.<br data-v-a1ccd506="">
          </p>

          <div class="code-box-actions">
            <span data-v-a1ccd506="" class="code-expand-icon">
              <img
                v-if="!showCode"
                data-v-a1ccd506=""
                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                class="code-expand-icon-show"
                @click="showCode = true"
              >
              <img
                v-else
                data-v-a1ccd506=""
                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                class="code-expand-icon-hide"
                @click="showCode = false"
              >
            </span>
          </div>
        </section>

        <section v-if="showCode" class="highlight-wrapper">
          <pre class="bg-gray-2 px-2">
            <code class="language-html">
&lt;SCRow&gt;
  &lt;SCCol :span=&quot;12&quot;&gt;
    col-12
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;12&quot;&gt;
    col-12
  &lt;/SCCol&gt;
&lt;/SCRow&gt;
&lt;SCRow&gt;
  &lt;SCCol :span=&quot;8&quot;&gt;
    col-8
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;8&quot;&gt;
    col-8
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;8&quot;&gt;
    col-8
  &lt;/SCCol&gt;
&lt;/SCRow&gt;
&lt;SCRow&gt;
  &lt;SCCol :span=&quot;6&quot;&gt;
    col-6
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;6&quot;&gt;
    col-6
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;6&quot;&gt;
    col-6
  &lt;/SCCol&gt;
  &lt;SCCol :span=&quot;6&quot;&gt;
    col-6
  &lt;/SCCol&gt;
&lt;/SCRow&gt;
</code>
          </pre>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

export default {
  name: 'BasicGrid',
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
