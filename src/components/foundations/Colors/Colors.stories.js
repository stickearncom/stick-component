import Colors from './index.vue'

export default {
  title: 'Foundations/Colors',
  component: Colors
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Colors },
  template: '<Colors />'
})

export const Default = Template.bind({})
