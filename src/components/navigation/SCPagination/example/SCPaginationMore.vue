<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination with more:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCPagination
            v-model="current"
            :total="500"
            show-less-items
          />
        </fieldset>
      </div>
    </div>

    <div class="flex mt-8">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Changer page size:
          </legend>

          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            @showSizeChange="onShowSizeChange"
          />
          <br>
          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            size="small"
            @showSizeChange="onShowSizeChange"
          />
        </fieldset>
      </div>
    </div>

    <div class="flex mt-8">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With jumper:
          </legend>

          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            show-quick-jumper
            @showSizeChange="onShowSizeChange"
            @change="current = $event"
          />
          <br>
          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            show-quick-jumper
            size="small"
            @showSizeChange="onShowSizeChange"
            @change="current = $event"
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
      current: 6,
      pageSize: 20
    }
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>
