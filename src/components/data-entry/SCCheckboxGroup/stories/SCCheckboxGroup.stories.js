import SCCheckboxGroup from '../index.vue'
import SCCheckboxGroupBasic from '../example/SCCheckboxGroupBasic.vue'
import SCCheckboxGroupOther from '../example/SCCheckboxGroupOther.vue'

export default {
  title: 'Data Entry/Checkbox/Checkbox Group',
  component: SCCheckboxGroup
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCCheckboxGroupBasic },
  template: '<SCCheckboxGroupBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Checkbox:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Check all
          </legend>

          <SCCheckbox
            class="pb-2 mb-2 border-b border-gray-400 border-solid w-full"
            :indeterminate="indeterminate"
            :checked="checkAll"
            @change="onCheckAllChange"
          >
            Check all
          </SCCheckbox>
          <div class="flex">
            <SCCheckboxGroup v-model="checkedList" :options="plainOptions" @change="onChange" />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

export default {
  data() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions
    }
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  }
}
</script>
`
    }
  }
}

export const Other = () => ({
  components: { SCCheckboxGroupOther },
  template: `<div>
    <SCCheckboxGroupOther />
  </div>
  `
})

Other.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Checkbox group other:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Group
          </legend>

          <SCCheckboxGroup
            v-model="value"
            name="checkboxgroup"
            :options="plainOptions"
            class="my-2"
            @change="onChange"
          />

          <SCCheckboxGroup
            :options="plainOptions"
            :default-value="['Apple']"
            class="my-2"
            @change="onChange"
          />

          <SCCheckboxGroup
            :options="options"
            :value="['Pear']"
            class="my-2"
            @change="onChange"
          />

          <SCCheckboxGroup
            :options="optionsWithDisabled"
            disabled
            :default-value="['Apple']"
            class="my-2"
            @change="onChange"
          >
            <span
              slot="label"
              slot-scope="{ value: currentValue }"
              style="color: red"
            >{{ currentValue }}</span>
          </SCCheckboxGroup>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCCheckboxGroup from '../index.vue'

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]

export default {
  components: {
    SCCheckboxGroup
  },
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value: []
    }
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues)
      console.log('value = ', this.value)
    }
  }
}
</script>
`
    }
  }
}
