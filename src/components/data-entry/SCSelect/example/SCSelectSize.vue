<template>
  <div>
    <h4 class="font-medium-lg">
      Select size:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="large"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="small"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
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
  }
}
</script>
