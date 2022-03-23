import SCBreadcrumb from '../index.vue'
import SCBreadcrumbBasic from '../example/SCBreadcrumb.vue'

export default {
  title: 'Navigation/Breadcrumb',
  component: SCBreadcrumb
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCBreadcrumbBasic },
  template: '<SCBreadcrumbBasic />'
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
            <SCBreadcrumb>Radio</SCBreadcrumb>
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
