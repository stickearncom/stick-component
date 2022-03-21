<template>
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
