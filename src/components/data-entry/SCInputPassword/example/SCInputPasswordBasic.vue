<template>
  <div>
    <h4 class="font-medium-lg">
      Input password:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Small
          </legend>

          <SCInputPassword placeholder="input password" size="small" />
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default
          </legend>

          <SCInputPassword placeholder="input password" />
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Large
          </legend>

          <SCInputPassword placeholder="input password" size="large" />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCInputPassword from '../index.vue'

export default {
  components: {
    SCInputPassword
  }
}
</script>

<style>

</style>
