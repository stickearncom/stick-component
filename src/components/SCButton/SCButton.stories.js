import SCButton from './index.vue'
import SCButtonNoDangerDefault from './example/SCButtonNoDangerDefault.vue'

export default {
  title: 'Components/Button',
  component: SCButton,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small', 'large'] } },
    type: { control: { type: 'select', options: ['default', 'primary', 'dashed', 'text', 'link'] } },
    shape: { control: { type: 'select', options: ['circle', 'round'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCButtonNoDangerDefault },
  template: '<SCButtonNoDangerDefault />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SCButton />'
    }
  }
}
