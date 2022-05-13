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
            <SCDatePicker />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCDatePicker from '../index.vue'

export default {
  components: {
    SCDatePicker
  }
}
</script>
