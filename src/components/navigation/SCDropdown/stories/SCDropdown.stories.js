import SCDropdown from '../index.vue'
import SCDropdownBasic from '../example/SCDropdownBasic.vue'

export default {
  title: 'Navigation/Dropdown',
  component: SCDropdown
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCDropdownBasic },
  template: '<SCDropdownBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Dropdown:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCDropdown>
              <a class="sc-dropdown__link" @click="e => e.preventDefault()">
                Hover me <SCIcon type="angle-down-solid" />
              </a>
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdown>

            <SCDropdown :trigger="['click']">
              <a class="sc-dropdown__link" @click="e => e.preventDefault()">
                Click me <SCIcon type="angle-down-solid" />
              </a>
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdown>

            <SCDropdown :disabled="true">
              <a class="sc-dropdown__link" @click="e => e.preventDefault()">
                Disabled <SCIcon type="angle-down-solid" />
              </a>
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdown>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>
`
    }
  }
}
