import SCTable from '../index.vue'
import SCTableBasic from '../example/SCTableBasic.vue'
import SCTableElipsis from '../example/SCTableElipsis.vue'
import SCTableAjax from '../example/SCTableAjax.vue'
import SCTableScroll from '../example/SCTableScroll.vue'
import SCTableSelection from '../example/SCTableSelection.vue'

export default {
  title: 'Data Display/Table',
  component: SCTable,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small', 'middle', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTableBasic },
  template: '<SCTableBasic />'
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

export const ElipsisColumn = () => ({
  components: { SCTableElipsis },
  template: `<div>
    <SCTableElipsis />
  </div>
  `
})

ElipsisColumn.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Table with elipsis column:
    </h4>
    <hr class="mb-8">

    <SCTable :columns="columns" :data-source="data">
      <a slot="name" slot-scope="{ text }">{{ text }}</a>
    </SCTable>
  </div>
</template>

<script>
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
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
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

export const Ajax = () => ({
  components: { SCTableAjax },
  template: `<div>
    <SCTableAjax />
  </div>
  `
})

Ajax.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Table Ajax:
    </h4>
    <hr class="mb-8">

    <SCTable
      :columns="columns"
      :row-key="record => record.login.uuid"
      :data-source="data"
      :loading="loading"
      @change="handleTableChange"
    >
      <template
        v-for="col in ['name', 'gender', 'email']"
        :slot="col"
        slot-scope="{ text, record }"
      >
        <div :key="col" class="cell">
          <template v-if="col === 'name'">
            <a>{{ record.name.first }} {{ record.name.last }}</a>
          </template>
          <template v-else>
            <span>{{ text || '-' }}</span>
          </template>
        </div>
      </template>
    </SCTable>

    <div class="w-full text-right mt-4">
      <SCPagination
        :disabled="loading"
        :current="query.page"
        :total="total"
        :page-size="query.results"
        show-size-changer
        show-quick-jumper
        @change="handleChangePagination"
        @showSizeChange="onShowSizeChange"
      />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%',
    scopedSlots: { customRender: 'gender' }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    scopedSlots: { customRender: 'email' }
  }
]

const queryData = (params) => {
  const searchParams = new URLSearchParams(params)
  return fetch(\`https://randomuser.me/api?\${searchParams}\`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then((res) => res.json()).then((users) => users)
}

export default {
  data() {
    return {
      data: [],
      columns,
      current: 1,
      total: 200,
      query: {
        page: 1,
        results: 10,
        sortField: '',
        sortOrder: ''
      },
      loading: false
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    handleTableChange(_, filters, sorter) {
      console.log({ filters, sorter })
      this.query.sortField = sorter.field
      this.query.sortOrder = sorter.order
      this.fetch()
    },
    handleChangePagination(value) {
      this.query.page = value
      this.fetch()
    },
    onShowSizeChange(_, pageSize) {
      this.query.results = pageSize
      this.query.page = 1
      this.fetch()
    },
    fetch() {
      this.loading = true
      queryData({
        results: 10,
        ...this.query
      }).then((res) => {
        this.data = res.results
        this.query.page = res.page
        this.loading = false
      })
    }
  }

}
</script>
    
`
    }
  }
}

export const FixedColumnsHeader = () => ({
  components: { SCTableScroll },
  template: `<div>
    <SCTableScroll />
  </div>
  `
})

FixedColumnsHeader.parameters = {
  docs: {
    source: {
      code: `<template>
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
    name: \`John brown - \${i}\`,
    age: 10 + i,
    address: \`London Street \${i}\`
  })
}

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

export const Selection = () => ({
  components: { SCTableSelection },
  template: `<div>
    <SCTableSelection />
  </div>
  `
})

Selection.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Table selection:
    </h4>
    <hr class="mb-8">

    <fieldset>
      <legend class="font-medium-md">
        Checkbox:
      </legend>

      <SCTable :row-selection="rowSelection" :columns="columns" :data-source="data">
        <a slot="name" slot-scope="{ text }">{{ text }}</a>
      </SCTable>
    </fieldset>

    <fieldset class="mt-10">
      <legend class="font-medium-md">
        Radio:
      </legend>

      <SCTable :row-selection="rowRadioSelection" :columns="columns" :data-source="data">
        <a slot="name" slot-scope="{ text }">{{ text }}</a>
      </SCTable>
    </fieldset>
  </div>
</template>

<script>
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
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: (record) => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    },
    rowRadioSelection() {
      return {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: (record) => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    }
  }
}
</script> 
`
    }
  }
}
