import SCIcon from './index.vue'
import SCIconExample from './example.vue'

export default {
  title: 'Foundations/Icons',
  component: SCIcon
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCIconExample },
  template: '<SCIconExample />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SCIcon type="user-circle-solid" />'
    }
  }
}
