import SCTag from '../index.vue'
import SCTagBasic from '../example/SCTagBasic.vue'

export default {
  title: 'Data Display/Tag',
  component: SCTag
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTagBasic },
  template: '<SCTagBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Tag:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCTag>Tag 1</SCTag>
            <SCTag><a href="http://stick-component-v2.netlify.app/">Link</a></SCTag>
            <SCTag closable @close="log">
              Tag 2
            </SCTag>
            <SCTag closable @close="preventDefault">
              Prevent Default
            </SCTag>
          </div>
        </fieldset>
      </div>

      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size
          </legend>

          <div class="flex justify-between">
            <SCTag closable size="small">
              Small
            </SCTag>
            <SCTag closable>
              Default
            </SCTag>
            <SCTag closable size="large">
              Large
            </SCTag>
          </div>

          <div class="flex justify-between mt-4">
            <SCTag dashed size="small">
              <SCIcon type="plus-solid" />
              <span class="ml-1">Add New</span>
            </SCTag>
            <SCTag dashed>
              <SCIcon type="plus-solid" />
              <span class="ml-1">Add New</span>
            </SCTag>
            <SCTag dashed size="large">
              <SCIcon type="plus-solid" />
              <span class="ml-1">Add New</span>
            </SCTag>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="flex mt-8">
      <fieldset class="w-full">
        <legend class="font-medium-md">
          Status
        </legend>

        <div class="flex justify-between">
          <SCTag status="success" size="large" />
          <SCTag status="processing" size="large" />
          <SCTag status="error" size="large" />
          <SCTag status="warning" size="large" />
          <SCTag status="default" size="large" />
        </div>
        <div class="flex justify-between mt-4">
          <SCTag status="success" />
          <SCTag status="processing" />
          <SCTag status="error" />
          <SCTag status="warning" />
          <SCTag status="default" />
        </div>
        <div class="flex justify-between mt-4">
          <SCTag status="success" size="small" />
          <SCTag status="processing" size="small" />
          <SCTag status="error" size="small" />
          <SCTag status="warning" size="small" />
          <SCTag status="default" size="small" />
        </div>
      </fieldset>
    </div>

    <div class="flex mt-8">
      <fieldset class="w-full">
        <legend class="font-medium-md">
          Status with icon
        </legend>

        <div class="flex justify-between">
          <SCTag status="success" size="large" status-icon />
          <SCTag status="processing" size="large" status-icon />
          <SCTag status="error" size="large" status-icon />
          <SCTag status="warning" size="large" status-icon />
          <SCTag status="default" size="large" status-icon />
        </div>
        <div class="flex justify-between mt-4">
          <SCTag status="success" status-icon />
          <SCTag status="processing" status-icon />
          <SCTag status="error" status-icon />
          <SCTag status="warning" status-icon />
          <SCTag status="default" status-icon />
        </div>
        <div class="flex justify-between mt-4">
          <SCTag status="success" size="small" status-icon />
          <SCTag status="processing" size="small" status-icon />
          <SCTag status="error" size="small" status-icon />
          <SCTag status="warning" size="small" status-icon />
          <SCTag status="default" size="small" status-icon />
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    log(e) {
      console.log(e)
    },
    preventDefault(e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    }
  }
}
</script>
`
    }
  }
}
