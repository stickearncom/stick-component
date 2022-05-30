<template>
  <table
    :id="id"
    :class="classes"
    @change="onChange"
  >
    <thead class="sc-table-draggable__head">
      <tr>
        <th v-for="column in columns" :key="column.key">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody v-if="loading" class="sc-table-draggable__body">
      <tr><td><SCSpin /></td></tr>
    </tbody>
    <draggable
      v-else
      v-model="data"
      tag="tbody"
      class="sc-table-draggable__body"
      handle=".handle"
    >
      <slot name="body" :items="dataSource" />
    </draggable>
  </table>
</template>

<script>
/* eslint-disable no-undefined */
import draggable from 'vuedraggable'
import SCSpin from '@stickearncom/scspin'

export default {
  name: 'SCTableDraggable',
  components: {
    draggable,
    SCSpin
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
    columns: {
      type: Array,
      default: undefined
    },
    dataSource: {
      type: Array,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: this.dataSource
    }
  },
  computed: {
    classes() {
      return {
        'sc-table-draggable': true,
        [`sc-table-draggable__${this.tableLayout}`]: this.tableLayout !== undefined
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
