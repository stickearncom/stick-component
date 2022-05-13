import SCCheckbox from '../index.vue'
import SCCheckboxBasic from '../example/SCCheckboxBasic.vue'

export default {
  title: 'Data Entry/Checkbox',
  component: SCCheckbox,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCCheckboxBasic },
  template: '<SCCheckboxBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Checkbox:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex">
            <SCCheckbox @change="onChange">
              Checkbox
            </SCCheckbox>
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Indeterminate
          </legend>

          <div class="flex">
            <SCCheckbox :indeterminate="indeterminate" @change="onChange" />
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Disabled
          </legend>

          <div class="flex justify-between">
            <SCCheckbox disabled />
            <SCCheckbox checked disabled />
            <SCCheckbox indeterminate disabled />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indeterminate: true
    }
  },
  methods: {
    onChange(e) {
      this.indeterminate = !e.target.checked
      console.log(\`checked = \${e.target.checked}\`)
    }
  }
}
</script>
`
    }
  }
}
