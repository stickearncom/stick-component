<template>
  <div>
    <h4 class="font-medium-lg">
      Tabs:
    </h4>
    <hr class="mb-4">

    <div class="flex flex-col">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" @change="callback" />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCTabs from '../index.vue'

export default {
  components: {
    SCTabs
  },
  data() {
    return {
      activeKey: '1',
      tabsList: [
        { key: '1', label: 'Profile' },
        { key: '2', label: 'Dashboard' },
        { key: '3', label: 'Settings' },
        { key: '4', label: 'Contacts' }
      ]
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },
    preventDefault(e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    }
  }
}
</script>
