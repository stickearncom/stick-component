<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination total number:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <SCPagination
          v-model="current"
          :total="85"
          :show-total="total => `Total ${total} items`"
          :page-size="20"
        />
        <br>
        <SCPagination
          v-model="current"
          :total="85"
          :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
          :page-size="20"
        />
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
