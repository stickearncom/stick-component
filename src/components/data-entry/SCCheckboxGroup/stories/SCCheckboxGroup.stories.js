import SCCheckboxGroup from '../index.vue'
import SCCheckboxGroupBasic from '../example/SCCheckboxGroupBasic.vue'

export default {
  title: 'Data Entry/Checkbox/Checkbox Group',
  component: SCCheckboxGroup,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCCheckboxGroupBasic },
  template: '<SCCheckboxGroupBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Space basic:
    </h4>
    <hr class="mb-4">

    <div class="w-full block">
      <SCCheckboxGroup class="bg-blue-100">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCCheckboxGroup>
    </div>

    <div class="mt-6 w-full block">
      <SCSwitch class="bg-blue-100" size="large">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSwitch>
    </div>

    <div class="mt-6 w-full block">
      <SCSwitch class="bg-blue-100" :size="64">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSwitch>
    </div>
  </div>
</template>`
    }
  }
}
