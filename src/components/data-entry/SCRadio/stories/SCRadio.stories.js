import SCRadio from '../index.vue'
import SCRadioBasic from '../example/SCRadioBasic.vue'

export default {
  title: 'Data Entry/Radio',
  component: SCRadio
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCRadioBasic },
  template: '<SCRadioBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Radio:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCRadio>Radio</SCRadio>
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Disabled
          </legend>

          <div class="flex justify-between">
            <SCRadio disabled>
              Radio
            </SCRadio>
            <SCRadio disabled checked>
              Radio
            </SCRadio>
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
