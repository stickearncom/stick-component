import SCInputPassword from '../index.vue'
import SCInputPasswordBasic from '../example/SCInputPasswordBasic.vue'

export default {
  title: 'Data Entry/Input Password',
  component: SCInputPassword,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCInputPasswordBasic },
  template: '<SCInputPasswordBasic />'
})

export const Default = Template.bind({})
