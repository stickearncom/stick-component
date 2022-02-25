import SCRow from './index.vue'

export default {
  title: 'Foundations/Grid/Row',
  component: SCRow,
  argTypes: {
    align: { control: { type: 'select', options: ['top', 'middle', 'bottom'] } },
    justify: { control: { type: 'select', options: ['start', 'end', 'center', 'space-around', 'space-between'] } }
  }
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
