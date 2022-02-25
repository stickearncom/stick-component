<template>
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

import SCButton from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton,
    SCIcon
  }
}
</script>
