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

      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Placement
          </legend>

          <SCRow :gutter="[8, 16]">
            <SCCol v-for="(placement, index) in placements" :key="index" :span="8">
              <SCDropdown :placement="placement">
                <SCButton>{{ placement }}</SCButton>
                <SCMenu slot="overlay">
                  <SCMenuItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >1st menu item</a>
                  </SCMenuItem>
                  <SCMenuItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >2nd menu item</a>
                  </SCMenuItem>
                  <SCMenuItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.tmall.com/"
                    >3rd menu item</a>
                  </SCMenuItem>
                </SCMenu>
              </SCDropdown>
            </SCCol>
          </SCRow>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        placements: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']
      }
    }
  }
</script>
`
    }
  }
}
