<template>
  <a-table
    :id="id"
    :class="classes"
    :table-layout="tableLayout"
    :bordered="bordered"
    :children-column-name="childrenColumnName"
    :columns="columns"
    :components="components"
    :data-source="dataSource"
    :default-expand-all-rows="defaultExpandAllRows"
    :default-expanded-row-keys="defaultExpandedRowKeys"
    :expanded-row-keys="expandedRowKeys"
    :expand-icon="expandIcon"
    :expand-row-by-click="expandRowByClick"
    :expand-icon-column-index="expandIconColumnIndex"
    :expanded-row-render="expandedRowRender"
    :footer="footer"
    :indent-size="indentSize"
    :loading="loading"
    :locale="locale"
    :pagination="false"
    :row-class-name="rowClassName"
    :row-key="rowKey"
    :row-selection="rowSelection"
    :scroll="scroll"
    :show-header="showHeader"
    :size="size"
    :title="title"
    :custom-header-row="customHeaderRow"
    :custom-row="customRow"
    :get-popup-container="getPopupContainer"
    :transform-cell-text="transformCellText"
    @change="onChange"
    @expand="$emit('expand', $event)"
    @expandedRowsChange="$emit('expandedRowsChange', $event)"
  >
    <template
      v-for="column in columns"
      :slot="
        column.scopedSlots && column.scopedSlots.customRender
          ? column.scopedSlots.customRender
          : column.key
      "
      slot-scope="text, record"
    >
      <slot
        :name="
          column.scopedSlots && column.scopedSlots.customRender
            ? column.scopedSlots.customRender
            : column.key
        "
        :text="text"
        :record="record"
      />
    </template>
    <slot />
  </a-table>
</template>

<script>
/* eslint-disable no-undefined */
import { Table } from 'ant-design-vue'

export default {
  name: 'SCTable',
  components: {
    'a-table': Table
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    tableLayout: {
      type: String,
      default: undefined,
      validator(value) {
        return ['auto', 'fixed'].indexOf(value) !== -1
      }
    },
    bordered: {
      type: Boolean,
      default: false
    },
    childrenColumnName: {
      type: Array,
      default: undefined
    },
    columns: {
      type: Array,
      default: undefined
    },
    components: {
      type: Object,
      default: undefined
    },
    dataSource: {
      type: Array,
      default: undefined
    },
    defaultExpandAllRows: {
      type: Boolean,
      default: false
    },
    defaultExpandedRowKeys: {
      type: Array,
      default: undefined
    },
    expandedRowKeys: {
      type: Array,
      default: undefined
    },
    expandedRowRender: {
      type: Function,
      default: undefined
    },
    expandIcon: {
      type: Function,
      default: undefined
    },
    expandRowByClick: {
      type: Boolean,
      default: false
    },
    expandIconColumnIndex: {
      type: Number,
      default: undefined
    },
    footer: {
      type: Function,
      default: undefined
    },
    indentSize: {
      type: Number,
      default: 15
    },
    loading: {
      type: [Boolean, Object],
      default: false
    },
    locale: {
      type: Object,
      default: undefined
    },
    rowClassName: {
      type: Function,
      default: undefined
    },
    rowKey: {
      type: [String, Function],
      default: undefined
    },
    rowSelection: {
      type: Object,
      default: undefined
    },
    scroll: {
      type: [Object, Boolean],
      default: undefined
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    size: {
      default: 'default',
      validator(value) {
        return ['default', 'small', 'middle', 'large'].indexOf(value) !== -1
      }
    },
    title: {
      type: Function,
      default: undefined
    },
    customHeaderRow: {
      type: Function,
      default: undefined
    },
    customRow: {
      type: Function,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    transformCellText: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    classes() {
      return {
        'sc-table': true
      }
    }
  },
  methods: {
    onChange(pagination, filters, sorter) {
      this.$emit('change', pagination, filters, sorter)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
