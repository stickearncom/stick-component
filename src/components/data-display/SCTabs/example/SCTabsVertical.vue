<template>
  <div>
    <h4 class="font-medium-lg">
      Tabs Vertical:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12 mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-6/12 mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Tabs with icon
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>
    </div>

    <div class="flex">
      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListLarge" tab-position="left" size="large" icon-type="setting-outline" @change="callback" />
          </div>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListDefault" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsListSmall" tab-position="left" size="small" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Position
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="right" icon-type="setting-outline" @change="callback" />
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
      ],
      tabsListDefault: [
        { key: '1', label: 'Default' },
        { key: '2', label: 'Dashboard' },
        { key: '3', label: 'Settings' },
        { key: '4', label: 'Contacts' }
      ],
      tabsListSmall: [
        { key: '1', label: 'Small' },
        { key: '2', label: 'Dashboard' },
        { key: '3', label: 'Settings' },
        { key: '4', label: 'Contacts' }
      ],
      tabsListLarge: [
        { key: '1', label: 'Large' },
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
