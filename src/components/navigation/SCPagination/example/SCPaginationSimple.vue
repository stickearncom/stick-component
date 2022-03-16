<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination simple:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <SCPagination v-model="current" simple :total="50" />
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
      current: 6
    }
  }
}
</script>
