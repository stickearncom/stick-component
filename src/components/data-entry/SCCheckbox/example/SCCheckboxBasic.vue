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
            Basic
          </legend>

          <div class="flex">
            <SCCheckbox @change="onChange">
              Checkbox
            </SCCheckbox>
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Indeterminate
          </legend>

          <div class="flex">
            <SCCheckbox :indeterminate="indeterminate" @change="onChange" />
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Disabled
          </legend>

          <div class="flex justify-between">
            <SCCheckbox disabled />
            <SCCheckbox checked disabled />
            <SCCheckbox indeterminate disabled />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCCheckbox from '../index.vue'

export default {
  components: {
    SCCheckbox
  },
  data() {
    return {
      indeterminate: true
    }
  },
  methods: {
    onChange(e) {
      this.indeterminate = !e.target.checked
      console.log(`checked = ${e.target.checked}`)
    }
  }
}
</script>
