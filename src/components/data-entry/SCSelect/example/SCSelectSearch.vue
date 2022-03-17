<template>
  <div>
    <h4 class="font-medium-lg">
      Select with search field:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/2">
        <SCSelect
          show-search
          placeholder="Select a person"
          option-filter-prop="children"
          style="width: 80%"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        >
          <SCSelectOption value="jack">
            Jack
          </SCSelectOption>
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
          <SCSelectOption value="tom">
            Tom
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>
  </div>
</template>

<script>
import SCSelect from '../index.vue'
import SCSelectOption from '../SCSelectOption/index.vue'

export default {
  components: {
    SCSelect,
    SCSelectOption
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      console.log('focus')
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
