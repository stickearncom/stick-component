<template>
  <div>
    <h4 class="font-medium-lg">
      Bradcrumb:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCBreadcrumb :routes="routes" />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCBreadcrumb from '../index.vue'

export default {
  components: {
    SCBreadcrumb
  },
  data() {
    return {
      routes: [
        {
          path: '/home',
          label: 'Home'
        },
        {
          path: '/application-center',
          label: 'Application Center'
        },
        {
          path: '/application-list',
          label: 'Application list'
        },
        {
          path: '/application',
          label: 'Application'
        }
      ]
    }
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`)
    }
  }
}
</script>
