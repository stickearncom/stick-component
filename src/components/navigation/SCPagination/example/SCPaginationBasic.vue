<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination basic:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/2">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCPagination
            v-model="current"
            :total="50"
            show-less-items
          />
        </fieldset>
      </div>

      <div class="w-1/2">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Small:
          </legend>

          <SCPagination
            v-model="current"
            :total="50"
            show-less-items
            size="small"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCPagination from '../index.vue'

export default {
  components: {
    SCPagination
  },
  data() {
    return {
      current: 2
    }
  }
}
</script>
