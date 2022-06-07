import SCDropdownButton from '../index.vue'
import SCDropdownButtonBasic from '../example/SCDropdownButtonBasic.vue'

export default {
  title: 'Navigation/Dropdown/Dropdown Button',
  component: SCDropdownButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCDropdownButtonBasic },
  template: '<SCDropdownButtonBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Dropdown Button:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCDropdownButton>
              Hover me
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>

            <SCDropdownButton :trigger="['click']">
              Click me
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>

            <SCDropdownButton :disabled="true">
              Disabled
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>
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
