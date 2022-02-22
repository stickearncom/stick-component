import SCCol from './index.vue'
import SCRow from '../SCRow/index.vue'

export default {
  title: 'Foundations/Layout/Grid/Column',
  component: SCCol
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCCol, SCRow },
  template: `<SCRow>
    <SCCol>
      // Add your content here
    </SCCol>
  </SCRow>`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<SCRow>
  <SCCol>
    // Add your content here
  </SCCol>
</SCRow>`
    }
  }
}
