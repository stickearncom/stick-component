import SCInputNumber from '../index.vue'
import SCInputNumberBasic from '../example/SCInputNumberBasic.vue'
import SCInputNumberDisabled from '../example/SCInputNumberDisabled.vue'
import SCInputNumberDecimal from '../example/SCInputNumberDecimal.vue'
import SCInputNumberError from '../example/SCInputNumberError.vue'
import SCInputNumberFormatter from '../example/SCInputNumberFormatter.vue'

export default {
  title: 'Data Entry/InputNumber',
  component: SCInputNumber
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCInputNumberBasic },
  template: '<SCInputNumberBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input number basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="large"
          :min="1"
          :max="100000"
          @change="onChange"
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          @change="onChange"
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="small"
          :min="1"
          :max="100000"
          @change="onChange"
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(value) {
      console.log('changed', value)
    }
  }
}
</script>
`
    }
  }
}

export const Disabled = () => ({
  components: { SCInputNumberDisabled },
  template: `<div>
    <SCInputNumberDisabled />
  </div>
  `
})

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input number disabled:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="large"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="small"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>
`
    }
  }
}

export const Decimal = () => ({
  components: { SCInputNumberDecimal },
  template: `<div>
    <SCInputNumberDecimal />
  </div>
  `
})

Decimal.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input number decimal:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          :step="0.1"
          @change="onChange"
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(value) {
      console.log('changed', value)
    }
  }
}
</script>    
`
    }
  }
}

export const Error = () => ({
  components: { SCInputNumberError },
  template: `<div>
    <SCInputNumberError />
  </div>
  `
})

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input number error:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="large"
          :min="1"
          :max="100000"
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="small"
          :min="1"
          :max="100000"
          has-error
        />
      </SCCol>
    </SCRow>
  </div>
</template> 
`
    }
  }
}

export const Formatter = () => ({
  components: { SCInputNumberFormatter },
  template: `<div>
    <SCInputNumberFormatter />
  </div>
  `
})

Formatter.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input number formatter:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCInputNumber
          :default-value="1000"
          :formatter="value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
          :parser="value => value.replace(/\\$\\s?|(,*)/g, '')"
        />
      </SCCol>
      <SCCol :span="12">
        <SCInputNumber
          :default-value="100"
          :min="0"
          :max="100"
          :formatter="value => \`\${value}%\`"
          :parser="value => value.replace('%', '')"
        />
      </SCCol>
    </SCRow>
  </div>
</template>
`
    }
  }
}
