<template>
  <div>
    <h4 class="font-medium-lg">
      Table basic:
    </h4>
    <hr class="mb-8">

    <SCTable :columns="columns" :data-source="data">
      <template
        v-for="col in ['name', 'age', 'address', 'tags', 'action']"
        :slot="col"
        slot-scope="{ text, record }"
      >
        <div :key="col" class="cell">
          <template v-if="col === 'name'">
            <a>{{ record.name || '-' }}</a>
          </template>
          <template v-else-if="col === 'age'">
            {{ record.age || '-' }}
          </template>
          <template v-else-if="col === 'address'">
            {{ record.address || '-' }}
          </template>
          <template v-else-if="col === 'tags'">
            <span v-for="tag in record.tags" :key="tag" class="ml-3">{{ tag }}</span>
          </template>
          <template v-else-if="col === 'action'">
            <a>Invite 一 {{ record.name }}</a>
            |
            <a>Delete</a>
            |
            <a> More actions </a>
          </template>
          <template v-else>
            <span>{{ text || '-' }}</span>
          </template>
        </div>
      </template>
    </SCTable>
  </div>
</template>

<script>
import SCTable from '../index.vue'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
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
    SCTable
  },
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
