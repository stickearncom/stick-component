<template>
  <div>
    <h4 class="font-medium-lg">
      Radio Group:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With option
          </legend>

          <SCRadioGroup :options="plainOptions" :default-value="value1" @change="onChange1" />
          <br>
          <SCRadioGroup v-model="value2" :options="options" @change="onChange2" />
          <br>
          <SCRadioGroup
            v-model="value3"
            :options="optionsWithDisabled"
            disabled
            @change="onChange3"
          />
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With name
          </legend>

          <SCRadioGroup name="radioGroup" :default-value="1">
            <SCRadio :value="1">
              A
            </SCRadio>
            <SCRadio :value="2">
              B
            </SCRadio>
            <SCRadio :value="3">
              C
            </SCRadio>
            <SCRadio :value="4">
              D
            </SCRadio>
          </SCRadioGroup>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCRadioGroup from '../index.vue'
import SCRadio from '../../SCRadio/index.vue'

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]

export default {
  components: {
    SCRadioGroup,
    SCRadio
  },
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1: 'Apple',
      value2: 'Apple',
      value3: 'Apple'
    }
  },
  methods: {
    onChange1(e) {
      console.log('radio1 checked', e.target.value)
    },
    onChange2(e) {
      console.log('radio2 checked', e.target.value)
    },
    onChange3(e) {
      console.log('radio3 checked', e.target.value)
    }
  }
}
</script>
