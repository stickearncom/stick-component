import SCRadioButton from '../index.vue'
import SCRadioButtonBasic from '../example/SCRadioButtonBasic.vue'

export default {
  title: 'Data Entry/Radio/Radio Button',
  component: SCRadioButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCRadioButtonBasic },
  template: '<SCRadioButtonBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Radio:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset>
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCRadioGroup default-value="a" size="small">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
          <div class="mt-4">
            <SCRadioGroup default-value="a">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
          <div class="mt-4">
            <SCRadioGroup default-value="a" size="large">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
        </fieldset>
      </div>

      <div class="w-6/12">
        <fieldset>
          <legend class="font-medium-md">
            Solid
          </legend>

          <div>
            <SCRadioGroup default-value="a" size="small" button-style="solid">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
          <div class="mt-4">
            <SCRadioGroup default-value="a" button-style="solid">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
          <div class="mt-4">
            <SCRadioGroup default-value="a" size="large" button-style="solid">
              <SCRadioButton value="a">
                Hangzhou
              </SCRadioButton>
              <SCRadioButton value="b">
                Shanghai
              </SCRadioButton>
              <SCRadioButton value="c" disabled>
                Beijing
              </SCRadioButton>
              <SCRadioButton value="d">
                Chengdu
              </SCRadioButton>
            </SCRadioGroup>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'a'
    }
  },
  methods: {
    onChange(e) {
      console.log(\`checked = \${e.target.value}\`)
    }
  }
}
</script>    
`
    }
  }
}
