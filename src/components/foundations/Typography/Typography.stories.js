import Typography from './index.vue'

export default {
  title: 'Foundations/Typography',
  component: Typography
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typography },
  template: '<Typography />'
})

export const Default = Template.bind({})
