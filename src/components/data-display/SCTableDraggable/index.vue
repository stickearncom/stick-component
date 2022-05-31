<template>
  <table
    :id="id"
    :class="classes"
  >
    <thead class="sc-table-draggable__head">
      <tr>
        <th v-for="column in columns" :key="column.key" :style="{textAlign: column.align}">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <draggable
      v-model="data"
      tag="tbody"
      class="sc-table-draggable__body"
      handle=".handle"
      @update="handleUpdate"
    >
      <tr v-if="!data.length">
        <td :colspan="columns.length">
          <div class="empty-section">
            <img src="./empty-image.svg" alt="empty-image">

            <p>You don't have any data yet</p>
          </div>
        </td>
      </tr>

      <slot v-else name="body" :items="dataSource" />
    </draggable>

    <div v-if="loading" class="sc-table-draggable__loading">
      <div class="sc-spin">
        <span class="sc-spin__purple" />
      </div>
    </div>
  </table>
</template>

<script>
/* eslint-disable no-undefined */
import draggable from 'vuedraggable'

export default {
  name: 'SCTableDraggable',
  components: {
    draggable
  },
  model: {
    prop: 'dataSource',
    event: 'update'
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
    },
    scroll: {
      type: Object,
      default: () => null
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
    handleUpdate() {
      this.$emit('update', this.data)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
