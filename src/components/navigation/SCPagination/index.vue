<template>
  <a-pagination
    :id="id"
    :class="classes"
    :default-current="defaultCurrent"
    :current="current"
    :page-size.sync="pageSizeSync"
    :default-page-size="defaultPageSize"
    :disabled="disabled"
    :hide-on-single-page="hideOnSinglePage"
    :item-render="itemRender"
    :page-size-options="pageSizeOptions"
    :show-less-items="showLessItems"
    :show-quick-jumper="showQuickJumper"
    :show-size-changer="showSizeChanger"
    :show-title="showTitle"
    :show-total="showTotal"
    :simple="simple"
    :size="size"
    :total="total"
    @change="$emit('change', $event)"
    @showSizeChange="onShowSizeChange"
  />
</template>

<script>
/* eslint-disable no-undefined */
import { Pagination } from 'ant-design-vue'

export default {
  name: 'SCPagination',
  components: {
    'a-pagination': Pagination
  },
  model: {
    prop: 'current',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    current: {
      type: Number,
      default: null
    },
    defaultCurrent: {
      type: Number,
      default: 1
    },
    defaultPageSize: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    itemRender: {
      type: Function,
      default: undefined
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: {
      type: Array,
      default: () => ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showTotal: {
      type: Function,
      default: undefined
    },
    simple: {
      type: Boolean,
      default: undefined
    },
    size: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pageSizeSync: this.pageSize
    }
  },
  computed: {
    classes() {
      return {
        'sc-pagination': true,
        [`sc-pagination-${this.size}`]: this.size !== ''
      }
    }
  },
  watch: {
    pageSize(newVal) {
      this.pageSizeSync = newVal
    }
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.$emit('showSizeChange', current, pageSize)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
