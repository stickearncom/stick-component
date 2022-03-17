import SCButton from '../index.vue'
import SCButtonNoDangerDefault from '../example/SCButtonNoDangerDefault.vue'
import SCButtonNoDangerPrimary from '../example/SCButtonNoDangerPrimary.vue'
import SCButtonNoDangerDashed from '../example/SCButtonNoDangerDashed.vue'
import SCButtonNoDangerText from '../example/SCButtonNoDangerText.vue'
import SCButtonNoDangerLink from '../example/SCButtonNoDangerLink.vue'
import SCButtonNoDangerIcon from '../example/SCButtonNoDangerIcon.vue'

export default {
  title: 'General/Button',
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
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button default:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton size="large" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton loading size="large" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton disabled size="large" danger>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2">
          Button
        </SCButton>
        <SCButton danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2">
          Button
        </SCButton>
        <SCButton loading danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2">
          Button
        </SCButton>
        <SCButton disabled danger>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton size="small" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton loading size="small" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton disabled size="small" danger>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>    
`
    }
  }
}

export const Primary = () => ({
  components: { SCButtonNoDangerPrimary },
  template: `<div>
    <SCButtonNoDangerPrimary />
  </div>
  `
})

Primary.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button primary:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2" type="primary">
          Button
        </SCButton>
        <SCButton size="large" danger type="primary">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="large"
          class="mb-2"
          type="primary"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="large"
          danger
          type="primary"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="large"
          class="mb-2"
          type="primary"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="large"
          danger
          type="primary"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2" type="primary">
          Button
        </SCButton>
        <SCButton danger type="primary">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2" type="primary">
          Button
        </SCButton>
        <SCButton loading danger type="primary">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2" type="primary">
          Button
        </SCButton>
        <SCButton disabled danger type="primary">
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2" type="primary">
          Button
        </SCButton>
        <SCButton size="small" danger type="primary">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="small"
          class="mb-2"
          type="primary"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="small"
          danger
          type="primary"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="small"
          class="mb-2"
          type="primary"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="small"
          danger
          type="primary"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>
`
    }
  }
}

export const Dashed = () => ({
  components: { SCButtonNoDangerDashed },
  template: `<div>
    <SCButtonNoDangerDashed />
  </div>
  `
})

Dashed.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button dashed:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2" type="dashed">
          Button
        </SCButton>
        <SCButton size="large" danger type="dashed">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="large"
          class="mb-2"
          type="dashed"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="large"
          danger
          type="dashed"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="large"
          class="mb-2"
          type="dashed"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="large"
          danger
          type="dashed"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2" type="dashed">
          Button
        </SCButton>
        <SCButton danger type="dashed">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2" type="dashed">
          Button
        </SCButton>
        <SCButton loading danger type="dashed">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2" type="dashed">
          Button
        </SCButton>
        <SCButton disabled danger type="dashed">
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2" type="dashed">
          Button
        </SCButton>
        <SCButton size="small" danger type="dashed">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="small"
          class="mb-2"
          type="dashed"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="small"
          danger
          type="dashed"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="small"
          class="mb-2"
          type="dashed"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="small"
          danger
          type="dashed"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>    
`
    }
  }
}

export const Text = () => ({
  components: { SCButtonNoDangerText },
  template: `<div>
    <SCButtonNoDangerText />
  </div>
  `
})

Text.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button text:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2" type="text">
          Button
        </SCButton>
        <SCButton size="large" danger type="text">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="large"
          class="mb-2"
          type="text"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="large"
          danger
          type="text"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="large"
          class="mb-2"
          type="text"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="large"
          danger
          type="text"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2" type="text">
          Button
        </SCButton>
        <SCButton danger type="text">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2" type="text">
          Button
        </SCButton>
        <SCButton loading danger type="text">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2" type="text">
          Button
        </SCButton>
        <SCButton disabled danger type="text">
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2" type="text">
          Button
        </SCButton>
        <SCButton size="small" danger type="text">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="small"
          class="mb-2"
          type="text"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="small"
          danger
          type="text"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="small"
          class="mb-2"
          type="text"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="small"
          danger
          type="text"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>
`
    }
  }
}

export const Icon = () => ({
  components: { SCButtonNoDangerIcon },
  template: `<div>
    <SCButtonNoDangerIcon />
  </div>
  `
})

Icon.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button Icon:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Button with icon:
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton danger>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
        <SCButton class="mt-2" danger disabled>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="primary">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton class="mb-2" danger type="primary">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton danger type="primary" disabled>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="dashed">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton class="mb-2" danger type="dashed">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton danger type="dashed" disabled>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="text">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton class="mb-2" danger type="text">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton danger type="text" disabled>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="link">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton class="mb-2" danger type="link">
          <SCIcon type="angle-left-b-outline" /> Button
        </SCButton>
        <SCButton danger type="link" disabled>
          Button <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Icon only:
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton danger icon>
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
        <SCButton
          class="mt-2"
          danger
          disabled
          icon
        >
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="primary" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          class="mb-2"
          danger
          type="primary"
          icon
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          danger
          type="primary"
          disabled
          icon
        >
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="dashed" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          class="mb-2"
          danger
          type="dashed"
          icon
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          danger
          type="dashed"
          disabled
          icon
        >
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="text" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          class="mb-2"
          danger
          type="text"
          icon
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          danger
          type="text"
          disabled
          icon
        >
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" type="link" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          class="mb-2"
          danger
          type="link"
          icon
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton
          danger
          type="link"
          disabled
          icon
        >
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Icon only size:
      </SCCol>
      <SCCol flex="1">
        <SCButton class="mb-2" icon size="small">
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton icon>
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
        <SCButton class="mt-2" icon size="large">
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton
          class="mb-2"
          type="primary"
          icon
          size="small"
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton class="mb-2" type="primary" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton type="primary" icon size="large">
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton
          class="mb-2"
          type="dashed"
          icon
          size="small"
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton class="mb-2" type="dashed" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton type="dashed" icon size="large">
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton
          class="mb-2"
          type="text"
          icon
          size="small"
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton class="mb-2" type="text" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton type="text" icon size="large">
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
      <SCCol flex="1">
        <SCButton
          class="mb-2"
          type="link"
          icon
          size="small"
        >
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton class="mb-2" type="link" icon>
          <SCIcon type="angle-left-b-outline" />
        </SCButton>
        <SCButton type="link" icon size="large">
          <SCIcon type="angle-right-b-outline" />
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'
import SCIcon from '@stickearncom/scicon'

import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton,
    SCIcon
  }
}
</script>    
`
    }
  }
}

export const Link = () => ({
  components: { SCButtonNoDangerLink },
  template: `<div>
    <SCButtonNoDangerLink />
  </div>
  `
})

Link.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Button link:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2" type="link">
          Button
        </SCButton>
        <SCButton size="large" danger type="link">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="large"
          class="mb-2"
          type="link"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="large"
          danger
          type="link"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="large"
          class="mb-2"
          type="link"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="large"
          danger
          type="link"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2" type="link">
          Button
        </SCButton>
        <SCButton danger type="link">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2" type="link">
          Button
        </SCButton>
        <SCButton loading danger type="link">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2" type="link">
          Button
        </SCButton>
        <SCButton disabled danger type="link">
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2" type="link">
          Button
        </SCButton>
        <SCButton size="small" danger type="link">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          loading
          size="small"
          class="mb-2"
          type="link"
        >
          Button
        </SCButton>
        <SCButton
          loading
          size="small"
          danger
          type="link"
        >
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton
          disabled
          size="small"
          class="mb-2"
          type="link"
        >
          Button
        </SCButton>
        <SCButton
          disabled
          size="small"
          danger
          type="link"
        >
          Button
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCButton from '@stickearncom/scbutton'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>    
`
    }
  }
}
