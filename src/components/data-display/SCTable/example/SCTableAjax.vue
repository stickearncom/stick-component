<template>
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
import SCPagination from '../../../navigation/SCPagination/index.vue'

import SCTable from '../index.vue'

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
  return fetch(`https://randomuser.me/api?${searchParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then((res) => res.json()).then((users) => users)
}

export default {
  components: {
    SCTable,
    SCPagination
  },
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
