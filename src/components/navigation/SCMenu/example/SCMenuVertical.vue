<template>
  <div>
    <h4 class="font-medium-lg">
      Menu Default:
    </h4>
    <hr class="mb-4">

    <div class="mb-6 flex items-center">
      <span class="mr-3">Theme:</span>
      <SCSwitch
        v-model="dark"
        checked-children="dark"
        un-checked-children="light"
      />
    </div>

    <div class="w-full flex">
      <fieldset class="w-6/12">
        <legend class="font-medium-md">
          Inline
        </legend>

        <div class="flex">
          <SCMenu
            v-model="current"
            style="width: 256px"
            :theme="dark ? 'dark' : 'light'"
            mode="inline"
            :menus="menus"
            @click="handleClick"
          />
        </div>
      </fieldset>

      <fieldset class="w-6/12">
        <legend class="font-medium-md">
          Vertical
        </legend>

        <div class="flex">
          <SCMenu
            v-model="current"
            style="width: 256px"
            :theme="dark ? 'dark' : 'light'"
            mode="vertical"
            :menus="menus"
            @click="handleClick"
          />
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import SCMenu from '../index.vue'
import SCSwitch from '../../../data-entry/SCSwitch/index.vue'

export default {
  components: {
    SCMenu,
    SCSwitch
  },
  data() {
    return {
      current: ['mail'],
      dark: false,
      menus: [
        {
          key: 'mail',
          type: 'menu',
          path: '#',
          label: 'Navigation One',
          icon: 'envelope-alt-solid'
        },
        {
          key: 'app',
          type: 'menu',
          path: '#',
          label: 'Navigation Two',
          icon: 'envelope-alt-solid',
          disabled: true
        },
        {
          key: 'subMenu1',
          type: 'sub-menu',
          label: 'Navigation Three - Submenu',
          icon: 'envelope-alt-solid',
          children: [
            {
              key: 'option-1',
              type: 'menu',
              path: '#',
              label: 'Option 1'
            },
            {
              key: 'option-2',
              type: 'menu',
              path: '#',
              label: 'Option 2'
            }
          ]
        },
        {
          key: 'subMenu2',
          type: 'sub-menu-group',
          label: 'Navigation Four - Submenu Group',
          icon: 'envelope-alt-solid',
          children: [
            {
              label: 'Item 1',
              children: [
                {
                  key: 'option-group-1',
                  type: 'menu',
                  path: '#',
                  label: 'Option 1'
                },
                {
                  key: 'option-group-2',
                  type: 'menu',
                  path: '#',
                  label: 'Option 2'
                }
              ]
            },
            {
              label: 'Item 2',
              children: [
                {
                  key: 'option-group-3',
                  type: 'menu',
                  path: '#',
                  label: 'Option 3'
                },
                {
                  key: 'option-group-4',
                  type: 'menu',
                  path: '#',
                  label: 'Option 4'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(value) {
      console.log({ value })
    }
  }
}
</script>
