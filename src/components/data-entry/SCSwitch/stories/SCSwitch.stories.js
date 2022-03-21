import SCSwitch from '../index.vue'
import SCSwitchBasic from '../example/SCSwitchBasic.vue'

export default {
  title: 'Data Entry/Switch',
  component: SCSwitch,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCSwitchBasic },
  template: '<SCSwitchBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Switch:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-around">
            <SCSwitch default-checked @change="onChange" />

            <SCSwitch default-checked size="small" @change="onChange" />
          </div>
        </fieldset>
      </div>

      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Text & Icon
          </legend>

          <div class="flex justify-around">
            <SCSwitch checked-children="1" un-checked-children="0" />

            <SCSwitch checked-children="1" un-checked-children="0" size="small" />
          </div>
          <br>
          <div class="flex justify-around">
            <SCSwitch default-checked>
              <SCIcon slot="checkedChildren" type="check-solid" />
              <SCIcon slot="unCheckedChildren" type="times-solid" />
            </SCSwitch>

            <SCSwitch default-checked size="small">
              <SCIcon slot="checkedChildren" type="check-solid" />
              <SCIcon slot="unCheckedChildren" type="times-solid" />
            </SCSwitch>
          </div>
        </fieldset>
      </div>

      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Loading
          </legend>

          <div class="flex justify-around">
            <SCSwitch disbaled loading @change="onChange" />

            <SCSwitch
              disbaled
              loading
              size="small"
              @change="onChange"
            />
          </div>
          <br>
          <div class="flex justify-around">
            <SCSwitch default-checked loading @change="onChange" />

            <SCSwitch
              default-checked
              loading
              size="small"
              @change="onChange"
            />
          </div>
        </fieldset>
      </div>

      <div class="w-3/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Disabled
          </legend>

          <div class="flex justify-around">
            <SCSwitch disabled @change="onChange" />
            <SCSwitch disabled size="small" @change="onChange" />
          </div>
          <br>
          <div class="flex justify-around">
            <SCSwitch default-checked disabled @change="onChange" />
            <SCSwitch
              default-checked
              disabled
              size="small"
              @change="onChange"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onChange(checked) {
      console.log(\`a-switch to \${checked}\`)
    }
  }
}
</script>
`
    }
  }
}
