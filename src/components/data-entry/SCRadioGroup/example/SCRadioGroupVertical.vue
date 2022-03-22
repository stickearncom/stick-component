<template>
  <div>
    <h4 class="font-medium-lg">
      Radio Group Vertical:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <SCRadioGroup v-model="value" @change="onChange">
          <SCRadio :style="radioStyle" :value="1">
            Option A
          </SCRadio>
          <SCRadio :style="radioStyle" :value="2">
            Option B
          </SCRadio>
          <SCRadio :style="radioStyle" :value="3">
            Option C
          </SCRadio>
          <SCRadio :style="radioStyle" :value="4">
            More...
            <SCInput v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
          </SCRadio>
        </SCRadioGroup>
      </div>
    </div>
  </div>
</template>

<script>
import SCRadio from '../../SCRadio/index.vue'
import SCRadioGroup from '../index.vue'
import SCInput from '../../SCInput/index.vue'

export default {
  components: {
    SCRadio,
    SCRadioGroup,
    SCInput
  },
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>
