<template>
  <div>
    <h4 class="font-medium-lg">
      Select multiple:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          style="width: 90%"
          size="large"
          :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
          placeholder="Please select"
          is-checkbox
          @change="value = $event"
        >
          <SCSelectOption v-for="i in 5" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
          <SCSelectOption key="xz3" disabled>
            xz3
          </SCSelectOption>
        </SCSelect>
      </div>
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          style="width: 90%"
          :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
          placeholder="Please select"
          is-checkbox
          @change="value = $event"
        >
          <SCSelectOption v-for="i in 5" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
          <SCSelectOption key="xz3" disabled>
            xz3
          </SCSelectOption>
        </SCSelect>
      </div>
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          style="width: 90%"
          size="small"
          :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
          placeholder="Please select"
          is-checkbox
          @change="value = $event"
        >
          <SCSelectOption v-for="i in 5" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
          <SCSelectOption key="xz3" disabled>
            xz3
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
  data() {
    return {
      value: []
    }
  }
}
</script>
