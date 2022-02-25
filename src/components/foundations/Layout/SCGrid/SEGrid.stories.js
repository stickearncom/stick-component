import SCGrid from './index.vue'
import '@/styles/main.scss'

export default {
  title: 'Foundations/Grid',
  component: SCGrid
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCGrid },
  template: '<SCGrid />'
})

export const Default = Template.bind({})
