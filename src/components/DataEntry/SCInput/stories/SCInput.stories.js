import SCInput from '../index.vue'
import SCInputBasic from '../example/SCInputBasic.vue'
import SCInputSize from '../example/SCInputSize.vue'
import SCInputPrefixSuffix from '../example/SCInputPrefixSuffix.vue'

export default {
  title: 'Data Entry/Input',
  component: SCInput
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCInputBasic },
  template: '<SCInputBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SCInput placeholder="Input here" />'
    }
  }
}

export const Size = () => ({
  components: { SCInputSize },
  template: `<div>
    <SCInputSize />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `asd
`
    }
  }
}

export const PrefixSuffix = () => ({
  components: { SCInputPrefixSuffix },
  template: `<div>
    <SCInputPrefixSuffix />
  </div>
  `
})

PrefixSuffix.parameters = {
  docs: {
    source: {
      code: `asd
`
    }
  }
}
