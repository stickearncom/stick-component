<template>
  <div>
    <h4 class="font-medium-lg">
      Checkbox:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex">
            <SCCheckboxGroup @change="onChange">
              Checkbox
            </SCCheckboxGroup>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCCheckboxGroup from '../index.vue'

export default {
  components: {
    SCCheckboxGroup
  },
  data() {
    return {}
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`)
    }
  }
}
</script>
