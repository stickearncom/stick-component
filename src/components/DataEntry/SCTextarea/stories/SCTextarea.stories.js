import SCTextarea from '../index.vue'
import SCTextareaBasic from '../example/SCTextareaBasic.vue'
import SCTextareaAutoSize from '../example/SCTextareaAutoSize.vue'
import SCTextareaError from '../example/SCTextareaError.vue'

export default {
  title: 'Data Entry/Textarea',
  component: SCTextarea
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTextareaBasic },
  template: '<SCTextareaBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Textarea basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCTextarea placeholder="Basic usage" allow-clear :rows="4" />
      </SCCol>
      <SCCol :span="12">
        <SCTextarea placeholder="Textarea disabled" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>`
    }
  }
}

export const AutoSize = () => ({
  components: { SCTextareaAutoSize },
  template: `<div>
    <SCTextareaAutoSize />
  </div>
  `
})

AutoSize.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Textarea autosize:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCTextarea
          placeholder="Autosize height based on content lines"
          auto-size
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </SCCol>
      <SCCol :span="8">
        <SCTextarea
          :value="value"
          placeholder="Autosize height based on content lines"
          auto-size
          :maxlength="10"
          show-count
          @change="value = $event"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          :value="value2"
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :maxlength="10"
          show-count
          allow-clear
          @change="value2 = $event"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          :value="value3"
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :maxlength="10"
          show-count
          allow-clear
          @change="value3 = $event"
        />
      </SCCol>
      <SCCol :span="8">
        <SCTextarea
          placeholder="Autosize height based on content lines"
          auto-size
          :maxlength="10"
          show-count
          disabled
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :maxlength="10"
          show-count
          allow-clear
          disabled
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :maxlength="10"
          show-count
          allow-clear
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
      value3: ''
    }
  },
  watch: {
    value2(newVal) {
      console.log({ newVal })
    }
  }
}
</script>    
`
    }
  }
}

export const Error = () => ({
  components: { SCTextareaError },
  template: `<div>
    <SCTextareaError />
  </div>
  `
})

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Textarea error:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCTextarea placeholder="Basic usage" has-error />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Allow clear"
          allow-clear
          :rows="4"
          has-error
        />
      </SCCol>
      <SCCol :span="12">
        <SCTextarea placeholder="Textarea disabled" disabled has-error />
      </SCCol>
    </SCRow>
  </div>
</template>     
`
    }
  }
}
