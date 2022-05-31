<template>
  <div>
    <h4 class="font-medium-lg">
      Table basic:
    </h4>
    <hr class="mb-8">

    <SCTableDraggable v-model="data" :columns="columns" @update="handleUpdate">
      <template slot="body" slot-scope="props">
        <tr v-for="(item, index) in props.items" :key="`body-${index}`">
          <td
            v-for="(column, idx) in columns"
            :key="`${column.key}-body-${idx}`"
            :align="column.align ? column.align : null"
          >
            <template v-if="column.key === 'key'">
              <span
                class="handle"
              ><i
                class="icon icon-elipsis-double-v-alt-solid"
              /></span>
            </template>
            <template v-else-if="column.key === 'action'">
              <a>Delete</a>
            </template>
            <template v-else>
              {{ item[column.key] }}
            </template>
          </td>
        </tr>
      </template>
    </SCTableDraggable>
  </div>
</template>

<script>
import SCTableDraggable from '../index.vue'

const columns = [
  {
    title: '',
    key: 'key'
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags'
  },
  {
    title: 'Action',
    key: 'action',
    align: 'right'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  components: {
    SCTableDraggable
  },
  data() {
    return {
      data,
      columns
    }
  },
  watch: {
    // You can use watch for v-model
    data(newVal) {
      console.log(newVal)
    }
  },
  methods: {
    // Or you can use method event update
    handleUpdate(value) {
      console.log({ value })
    }
  }
}
</script>
