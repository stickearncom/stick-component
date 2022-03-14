<template>
  <div>
    <fieldset>
      <legend class="font-medium-md">
        Select with checkbox all:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCSelect
            mode="multiple"
            style="width: 90%"
            size="large"
            :current-value="value"
            :data-name="labelSelect"
            placeholder="Please select"
            :dropdown-class-name="`${
              value.length && options.length !== value.length - 1
                ? 'indeterminate'
                : ''
            }`"
            is-checkbox
            @deselect="handleDeselect"
            @select="handleSelect"
          >
            <SCSelectOption
              key="all"
              class="sc-select-option-select-all"
              is-select-all
            >
              Select All
            </SCSelectOption>
            <SCSelectOption v-for="option in options" :key="option.value">
              {{ option.label }}
            </SCSelectOption>
          </SCSelect>
        </div>

        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            size="large"
            allow-clear
            :max-tag-count="2"
            :dropdown-class-name="`${
              valueTags.length && options.length !== valueTags.length - 1
                ? 'indeterminate'
                : ''
            }`"
            is-checkbox
            :current-value="valueTags"
            @deselect="handleDeselectTags"
            @select="handleSelectTags"
          >
            <SCSelectOption
              key="all"
              class="sc-select-option-select-all"
              is-select-all
              @click="handleSelectAllTags"
            >
              Select All
            </SCSelectOption>
            <SCSelectOption v-for="option in options" :key="option.value">
              {{ option.label }}
            </SCSelectOption>
          </SCSelect>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import SCSelect from '../index.vue'
import SCSelectOption from '../SCSelectOption/index.vue'

const options = []

for (let i = 0; i < 10; i += 1) {
  options.push({
    label: (i + 9).toString(36) + i,
    value: (i + 9).toString(36) + i
  })
}

export default {
  components: {
    SCSelect,
    SCSelectOption
  },
  data() {
    return {
      options,
      value: [],
      valueTags: []
    }
  },
  computed: {
    labelSelect() {
      return `Label ${
              this.value.length
                ? `(${this.value.filter((item) => item !== 'all').length})`
                : ''
            }`
    }
  },
  methods: {
    handleSelect(value) {
      if (value === 'all') {
        this.value = ['all', ...this.options.map((option) => option.value)]
      } else {
        this.value.push(value)
      }
    },
    handleDeselect(value) {
      if (value === 'all') {
        this.value = []
      } else {
        const deselectIndex = this.value.findIndex((element) => element === value)
        this.value.splice(deselectIndex, 1)
      }
    },
    handleSelectTags(value) {
      if (value === 'all') {
        this.valueTags = ['all', ...this.options.map((option) => option.value)]
      } else {
        this.valueTags.push(value)
      }
    },
    handleDeselectTags(value) {
      if (value === 'all') {
        this.valueTags = []
      } else {
        const deselectIndex = this.valueTags.findIndex((element) => element === value)
        this.valueTags.splice(deselectIndex, 1)
      }
    }
  }
}
</script>
