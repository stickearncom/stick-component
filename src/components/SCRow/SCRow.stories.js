import SCRow from './index.vue'
import '@/styles/main.scss'

export default {
  title: 'Foundations/Layout/Grid/Row',
  component: SCRow
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCRow },
  template: '<SCRow />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SCRow />'
    }
  }
}
