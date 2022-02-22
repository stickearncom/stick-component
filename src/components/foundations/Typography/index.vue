<template>
  <div>
    <h6 class="font-medium-lg mb-4">
      Regular
    </h6>
    <a-table
      :columns="columns"
      :data-source="textStyles.regular"
      :pagination="false"
    >
      <template
        v-for="col in [
          'styleName',
          'fontSize',
          'lineHeight',
          'sample',
          'class'
        ]"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col" class="cell">
          <template v-if="col === 'styleName'">
            <div class="whitespace-nowrap">
              {{ `${record.styleName} ${record.fontSize} / ${record.lineHeight}` }}
            </div>
          </template>
          <template v-else-if="col === 'class'">
            <code class="bg-gray-100 py-0.5 px-1 whitespace-nowrap">{{ record.class }}</code>
          </template>
          <template v-else-if="col === 'sample'">
            <div :class="record.class">
              {{ record.sample }}
            </div>
          </template>
          <template v-else>
            <div>
              {{ record[col] ||"-" }}
            </div>
          </template>
        </div>
      </template>
    </a-table>

    <h6 class="font-medium-lg mb-4 mt-10">
      Medium
    </h6>
    <a-table
      :columns="columns"
      :data-source="textStyles.medium"
      :pagination="false"
    >
      <template
        v-for="col in [
          'styleName',
          'fontSize',
          'lineHeight',
          'sample',
          'class'
        ]"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col" class="cell">
          <template v-if="col === 'styleName'">
            <div class="whitespace-nowrap">
              {{ `${record.styleName} ${record.fontSize} / ${record.lineHeight}` }}
            </div>
          </template>
          <template v-else-if="col === 'class'">
            <code class="bg-gray-100 py-0.5 px-1 whitespace-nowrap">{{ record.class }}</code>
          </template>
          <template v-else-if="col === 'sample'">
            <div :class="record.class">
              {{ record.sample }}
            </div>
          </template>
          <template v-else>
            <div>
              {{ record[col] ||"-" }}
            </div>
          </template>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import Vue from 'vue'
import { Table } from 'ant-design-vue'
import VueCompositionAPI, { reactive } from '@vue/composition-api'

import columns from './columnConfig'

Vue.use(VueCompositionAPI)
Vue.use(Table)

export default {
  name: 'Typography',
  setup() {
    const textStyles = reactive({
      regular: [
        {
          styleName: 'Regular /',
          fontSize: '11px',
          lineHeight: '18px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-2xs'
        },
        {
          styleName: 'Regular /',
          fontSize: '12px',
          lineHeight: '20px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-xs'
        },
        {
          styleName: 'Regular /',
          fontSize: '14px',
          lineHeight: '22px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-sm'
        },
        {
          styleName: 'Regular /',
          fontSize: '16px',
          lineHeight: '24px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-md'
        },
        {
          styleName: 'Regular /',
          fontSize: '20px',
          lineHeight: '28px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-lg'
        },
        {
          styleName: 'Regular /',
          fontSize: '24px',
          lineHeight: '32px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-xl'
        },
        {
          styleName: 'Regular /',
          fontSize: '30px',
          lineHeight: '38px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-2xl'
        },
        {
          styleName: 'Regular /',
          fontSize: '38px',
          lineHeight: '46px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-3xl'
        },
        {
          styleName: 'Regular /',
          fontSize: '46px',
          lineHeight: '56px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-4xl'
        },
        {
          styleName: 'Regular /',
          fontSize: '56px',
          lineHeight: '64px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-regular-5xl'
        }
      ],
      medium: [
        {
          styleName: 'Medium /',
          fontSize: '12px',
          lineHeight: '20px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-xs'
        },
        {
          styleName: 'Medium /',
          fontSize: '14px',
          lineHeight: '22px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-sm'
        },
        {
          styleName: 'Medium /',
          fontSize: '16px',
          lineHeight: '24px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-md'
        },
        {
          styleName: 'Medium /',
          fontSize: '20px',
          lineHeight: '28px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-lg'
        },
        {
          styleName: 'Medium /',
          fontSize: '24px',
          lineHeight: '32px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-xl'
        },
        {
          styleName: 'Medium /',
          fontSize: '30px',
          lineHeight: '38px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-2xl'
        },
        {
          styleName: 'Medium /',
          fontSize: '38px',
          lineHeight: '46px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-3xl'
        },
        {
          styleName: 'Medium /',
          fontSize: '46px',
          lineHeight: '56px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-4xl'
        },
        {
          styleName: 'Medium /',
          fontSize: '56px',
          lineHeight: '64px',
          sample: 'The quick fox jumps over the lazy dog.',
          class: 'font-medium-5xl'
        }
      ]
    })

    return { textStyles, columns }
  }
}
</script>
