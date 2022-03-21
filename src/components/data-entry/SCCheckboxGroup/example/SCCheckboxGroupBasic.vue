<template>
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
import SCCheckbox from '@stickearncom/sccheckbox'
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
      console.log({
        indeterminate: this.indeterminate,
        checkAll: this.checkAll
      })
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
