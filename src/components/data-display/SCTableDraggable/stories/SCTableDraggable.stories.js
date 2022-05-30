import SCSkeleton from '../index.vue'
import SCTableDraggableBasic from '../example/SCTableDraggableBasic.vue'

export default {
  title: 'Data Display/Table/Draggable',
  component: SCSkeleton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTableDraggableBasic },
  template: '<SCTableDraggableBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Table basic:
    </h4>
    <hr class="mb-8">

    <SCTableDraggable :columns="columns" :data-source="data">
      <template slot="body" slot-scope="props">
        <tr v-for="(item, index) in props.items" :key="\`body-\${index}\`">
          <td v-for="(column, idx) in columns" :key="\`\${column.key}-body-\${idx}\`">
            <template v-if="column.key === 'key'">
              <span><i class="icon icon-elipsis-double-v-alt-solid" /></span>
            </template>
            <template v-else-if="column.key === 'action'">
              <a>Invite 一 {{ item.name }}</a>
              |
              <a>Delete</a>
              |
              <a> More actions </a>
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
    key: 'tags',
    dataIndex: 'tags'
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
  data() {
    return {
      data,
      columns
    }
  }
}
</script>     
`
    }
  }
}
