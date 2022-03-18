<template>
  <div>
    <h4 class="font-medium-lg">
      Table fixed column and header:
    </h4>
    <hr class="mb-8">

    <SCTable :columns="columns" :data-source="data" :scroll="{ x: 1300, y: 240 }">
      <a slot="action" href="javascript:;">action</a>
    </SCTable>
  </div>
</template>

<script>
import SCTable from '../index.vue'

const columns = [
  {
    title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left'
  },
  {
    title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left'
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const data = []

for (let i = 1; i <= 30; i += 1) {
  data.push({
    key: i,
    name: `John brown - ${i}`,
    age: 10 + i,
    address: `London Street ${i}`
  })
}

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
