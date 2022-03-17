import SCInputSearch from '../index.vue'
import SCInputSearchBasic from '../example/SCInputSearchBasic.vue'

export default {
  title: 'Data Entry/InputSearch',
  component: SCInputSearch,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCInputSearchBasic },
  template: '<SCInputSearchBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input search basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCInputSearch placeholder="Search input" allow-clear size="large" />
        <div style="margin: 16px 0" />
        <SCInputSearch placeholder="Search input" allow-clear />
        <div style="margin: 16px 0" />
        <SCInputSearch placeholder="Search input" allow-clear size="small" />
      </SCCol>
      <SCCol :span="12">
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="large"
          disabled
        />
        <div style="margin: 16px 0" />
        <SCInputSearch placeholder="Search input" allow-clear disabled />
        <div style="margin: 16px 0" />
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="small"
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>`
    }
  }
}
