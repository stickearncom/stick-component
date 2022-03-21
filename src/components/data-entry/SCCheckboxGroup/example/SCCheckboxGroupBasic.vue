<template>
  <div>
    <h4 class="font-medium-lg">
      Checkbox group basic:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
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
      </div>
    </div>
  </div>
</template>

<script>
import SCCheckbox from '../../SCCheckbox/index.vue'
import SCCheckboxGroup from '../index.vue'

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

export default {
  components: {
    SCCheckbox,
    SCCheckboxGroup
  },
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
    onCheckAllChange(value) {
      Object.assign(this, {
        checkedList: value ? plainOptions : [],
        indeterminate: false,
        checkAll: value
      })
    }
  }
}
</script>
