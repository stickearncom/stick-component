import SCDatePicker from '../index.vue'
import SCDatePickerBasic from '../example/SCDatePickerBasic.vue'

export default {
  title: 'Data Entry/Date Picker',
  component: SCDatePicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCDatePickerBasic },
  template: '<SCDatePickerBasic />'
})

export const Default = Template.bind({})
