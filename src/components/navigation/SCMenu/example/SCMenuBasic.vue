<template>
  <div>
    <h4 class="font-medium-lg">
      Menu Default:
    </h4>
    <hr class="mb-4">

    <div class="w-full">
      <fieldset>
        <legend class="font-medium-md">
          Light
        </legend>

        <div class="w-full">
          <SCMenu
            v-model="current"
            mode="horizontal"
            :menus="menus"
            @click="handleClick"
          />
        </div>
      </fieldset>
    </div>

    <div class="w-full mt-4">
      <fieldset>
        <legend class="font-medium-md">
          Dark
        </legend>

        <div class="w-full">
          <SCMenu
            v-model="current"
            theme="dark"
            mode="horizontal"
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

export default {
  components: {
    SCMenu
  },
  data() {
    return {
      current: ['mail'],
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
