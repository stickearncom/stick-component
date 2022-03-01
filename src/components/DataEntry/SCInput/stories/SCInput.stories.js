import SCInput from '../index.vue'
import SCInputBasic from '../example/SCInputBasic.vue'
import SCInputSize from '../example/SCInputSize.vue'
import SCInputPrefixSuffix from '../example/SCInputPrefixSuffix.vue'
import SCInputError from '../example/SCInputError.vue'
import SCInputPrePostTab from '../example/SCInputPrePostTab.vue'

export default {
  title: 'Data Entry/Input',
  component: SCInput
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCInputBasic },
  template: '<SCInputBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="9">
        <SCInput placeholder="Input basic" allow-clear />
      </SCCol>
      <SCCol :span="9">
        <SCInput placeholder="Input disabled" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCInput from '@stickearncom/scinput'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  }
}
</script>`
    }
  }
}

export const Size = () => ({
  components: { SCInputSize },
  template: `<div>
    <SCInputSize />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input Size:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput
          class="mb-3"
          placeholder="Input small"
          size="small"
          allow-clear
        />
        <SCInput placeholder="Input small disabled" size="small" disabled />
      </SCCol>
      <SCCol :span="8">
        <SCInput class="mb-3" placeholder="Input default" allow-clear />
        <SCInput placeholder="Input default disabled" disabled />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          class="mb-3"
          placeholder="Input large"
          size="large"
          allow-clear
        />
        <SCInput placeholder="Input large disabled" size="large" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCInput from '@stickearncom/scinput'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  }
}
</script>
`
    }
  }
}

export const PrefixSuffix = () => ({
  components: { SCInputPrefixSuffix },
  template: `<div>
    <SCInputPrefixSuffix />
  </div>
  `
})

PrefixSuffix.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input Prefix & Suffix:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" prefix="￥" allow-clear />
      </SCCol>
      <SCCol :span="8">
        <SCInput placeholder="Input basic">
          <SCIcon slot="prefix" type="user-circle-solid" />
        </SCInput>
      </SCCol>
      <SCCol :span="8">
        <SCInput prefix="$" placeholder="Input basic" disabled />
      </SCCol>
    </SCRow>

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" suffix="RMB" />
      </SCCol>
      <SCCol :span="8">
        <SCInput placeholder="Input basic">
          <SCIcon slot="suffix" type="info-circle-solid" allow-clear />
        </SCInput>
      </SCCol>
      <SCCol :span="8">
        <SCInput prefix="￥" suffix="RMB" placeholder="Input basic" />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCIcon from '@stickearncom/scicon'
import SCInput from '@stickearncom/scinput'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput,
    SCIcon
  }
}
</script>
`
    }
  }
}

export const Error = () => ({
  components: { SCInputError },
  template: `<div>
    <SCInputError />
  </div>
  `
})

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input Error:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" has-error />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          prefix="$"
          placeholder="Input basic"
          has-error
          allow-clear
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          prefix="￥"
          suffix="RMB"
          placeholder="Input basic"
          has-error
          allow-clear
        />
      </SCCol>
    </SCRow>

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="small"
          placeholder="small"
          allow-clear
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          allow-clear
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          allow-clear
          has-error
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCInput from '@stickearncom/scinput'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  }
}
</script>
    
`
    }
  }
}

export const PrePostTab = () => ({
  components: { SCInputPrePostTab },
  template: `<div>
    <SCInputPrePostTab />
  </div>
  `
})

PrePostTab.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Input pre / post tab:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="small"
          placeholder="small"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          disabled
          allow-clear
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCInput from '@stickearncom/scinput'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  }
}
</script>
    
`
    }
  }
}
