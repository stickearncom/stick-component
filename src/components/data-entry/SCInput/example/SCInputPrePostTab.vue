<template>
  <div>
    <h4 class="font-medium-lg">
      Input pre / post tab:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="small"
          placeholder="small"
          allow-clear
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          placeholder="small"
          allow-clear
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          placeholder="small"
          allow-clear
        />
      </SCCol>

      <!-- Group Select -->
      <SCCol :span="8">
        <SCInput default-value="mysite" allow-clear size="small">
          <SCSelect
            slot="addonBefore"
            default-value="Http://"
            size="small"
            style="width: 90px"
          >
            <SCSelectOption value="Http://">
              Http://
            </SCSelectOption>
            <SCSelectOption value="Https://">
              Https://
            </SCSelectOption>
          </SCSelect>
          <SCSelect
            slot="addonAfter"
            default-value=".com"
            size="small"
            style="width: 80px"
          >
            <SCSelectOption value=".com">
              .com
            </SCSelectOption>
            <SCSelectOption value=".jp">
              .jp
            </SCSelectOption>
            <SCSelectOption value=".cn">
              .cn
            </SCSelectOption>
            <SCSelectOption value=".org">
              .org
            </SCSelectOption>
          </SCSelect>
        </SCInput>
      </SCCol>

      <SCCol :span="8">
        <SCInput default-value="mysite" allow-clear>
          <SCSelect slot="addonBefore" default-value="Http://" style="width: 90px">
            <SCSelectOption value="Http://">
              Http://
            </SCSelectOption>
            <SCSelectOption value="Https://">
              Https://
            </SCSelectOption>
          </SCSelect>
          <SCSelect slot="addonAfter" default-value=".com" style="width: 80px">
            <SCSelectOption value=".com">
              .com
            </SCSelectOption>
            <SCSelectOption value=".jp">
              .jp
            </SCSelectOption>
            <SCSelectOption value=".cn">
              .cn
            </SCSelectOption>
            <SCSelectOption value=".org">
              .org
            </SCSelectOption>
          </SCSelect>
        </SCInput>
      </SCCol>

      <SCCol :span="8">
        <SCInput default-value="mysite" allow-clear size="large">
          <SCSelect
            slot="addonBefore"
            default-value="Http://"
            size="large"
            style="width: 90px"
          >
            <SCSelectOption value="Http://">
              Http://
            </SCSelectOption>
            <SCSelectOption value="Https://">
              Https://
            </SCSelectOption>
          </SCSelect>
          <SCSelect
            slot="addonAfter"
            default-value=".com"
            size="large"
            style="width: 80px"
          >
            <SCSelectOption value=".com">
              .com
            </SCSelectOption>
            <SCSelectOption value=".jp">
              .jp
            </SCSelectOption>
            <SCSelectOption value=".cn">
              .cn
            </SCSelectOption>
            <SCSelectOption value=".org">
              .org
            </SCSelectOption>
          </SCSelect>
        </SCInput>
      </SCCol>

      <!-- Disabled -->
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          placeholder="small"
          allow-clear
          disabled
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput default-value="mysite" allow-clear disabled>
          <SCSelect
            slot="addonBefore"
            default-value="Http://"
            disabled
            style="width: 90px"
          >
            <SCSelectOption value="Http://">
              Http://
            </SCSelectOption>
            <SCSelectOption value="Https://">
              Https://
            </SCSelectOption>
          </SCSelect>
          <SCSelect
            slot="addonAfter"
            default-value=".com"
            disabled
            style="width: 80px"
          >
            <SCSelectOption value=".com">
              .com
            </SCSelectOption>
            <SCSelectOption value=".jp">
              .jp
            </SCSelectOption>
            <SCSelectOption value=".cn">
              .cn
            </SCSelectOption>
            <SCSelectOption value=".org">
              .org
            </SCSelectOption>
          </SCSelect>
        </SCInput>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'
import SCSelect from '@/components/data-entry/SCSelect/index.vue'
import SCSelectOption from '@/components/data-entry/SCSelect/SCSelectOption/index.vue'

import SCInput from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput,
    SCSelect,
    SCSelectOption
  }
}
</script>
