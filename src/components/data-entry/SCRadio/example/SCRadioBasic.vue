<template>
  <div>
    <h4 class="font-medium-lg">
      Radio:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-around">
            <SCRadio>Radio</SCRadio>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCRadio from '../index.vue'

export default {
  components: {
    SCRadio
  },
  data() {
    return {}
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`)
    }
  }
}
</script>
