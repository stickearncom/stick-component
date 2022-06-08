import SCMenu from '../index.vue'
import SCMenuBasic from '../example/SCMenuBasic.vue'

export default {
  title: 'Navigation/Menu',
  component: SCMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCMenuBasic },
  template: '<SCMenuBasic />'
})

export const Default = Template.bind({})
