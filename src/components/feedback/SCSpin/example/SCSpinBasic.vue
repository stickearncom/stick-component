<template>
  <div>
    <h4 class="font-medium-lg">
      Spin:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex">
            <SCSpin />
          </div>
        </fieldset>
      </div>
      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size
          </legend>

          <div class="flex">
            <SCSpin size="small" />
            <SCSpin />
            <SCSpin size="large" />
          </div>
        </fieldset>
      </div>

      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Text
          </legend>

          <div>
            <SCSpin>Loading...</SCSpin>
          </div>
        </fieldset>
      </div>

      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Color
          </legend>

          <div>
            <SCSpin>Default...</SCSpin>
            <SCSpin color="purple">
              Purple...
            </SCSpin>
            <SCSpin color="yellow">
              Yellow...
            </SCSpin>
            <SCSpin color="green">
              Green...
            </SCSpin>
            <SCSpin color="red">
              Red...
            </SCSpin>
            <SCSpin color="blue">
              Blue...
            </SCSpin>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCSpin from '../index.vue'

export default {
  components: {
    SCSpin
  }
}
</script>
