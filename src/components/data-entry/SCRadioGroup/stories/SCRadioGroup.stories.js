import SCRadioGroup from '../index.vue'
import SCRadioGroupBasic from '../example/SCRadioGroupBasic.vue'
import SCRadioGroupVertical from '../example/SCRadioGroupVertical.vue'

export default {
  title: 'Data Entry/Radio/Radio Group',
  component: SCRadioGroup
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCRadioGroupBasic },
  template: '<SCRadioGroupBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Radio Group:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
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
      </div>
    </div>
  </div>
</template>

<script>
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
`
    }
  }
}

export const Vertical = () => ({
  components: { SCRadioGroupVertical },
  template: `<div>
    <SCRadioGroupVertical />
  </div>
  `
})

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>
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
export default {
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
`
    }
  }
}
