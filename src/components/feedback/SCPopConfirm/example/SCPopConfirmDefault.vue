<template>
  <div>
    <h4 class="font-medium-lg">
      Pop Confirm default:
    </h4>
    <hr class="mb-4">
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="4">
        <SCPopConfirm
          placement="leftTop"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Left Top
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="leftBottom"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Left Bottom
          </SCButton>
        </SCPopConfirm>
      </SCCol>

      <SCCol :span="4">
        <SCPopConfirm
          placement="topLeft"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Top Left
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="bottomLeft"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Bottom Left
          </SCButton>
        </SCPopConfirm>
      </SCCol>

      <SCCol :span="4">
        <SCPopConfirm
          placement="top"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Top
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="bottom"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Bottom
          </SCButton>
        </SCPopConfirm>
      </SCCol>

      <SCCol :span="4">
        <SCPopConfirm
          placement="topRight"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Top Right
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="bottomRight"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Bottom Right
          </SCButton>
        </SCPopConfirm>
      </SCCol>

      <SCCol :span="4">
        <SCPopConfirm
          placement="rightTop"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Right Top
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="rightBottom"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Right Bottom
          </SCButton>
        </SCPopConfirm>
      </SCCol>

      <SCCol :span="4">
        <SCPopConfirm
          placement="right"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Right
          </SCButton>
        </SCPopConfirm>
        <SCPopConfirm
          placement="left"
          class="mb-2"
          title="Are you sure to delete this task?"
          icon-color="#FAB800"
        >
          <SCButton class="mb-2" type="primary">
            Left
          </SCButton>
        </SCPopConfirm>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'
import SCButton from '@/components/general/SCButton/index.vue'

import SCPopConfirm from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton,
    SCPopConfirm
  }
}
</script>
