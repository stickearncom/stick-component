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
        v-for="col in ['name', 'age', 'address', 'tags', 'action']"
        :slot="col"
        slot-scope="{ text, record }"
      >
        {{ handleTableChange(record) }}
        <div :key="col" class="cell">
          <template v-if="col === 'name'">
            <a>{{ record.name.first || '-' }}</a>
          </template>
          <template v-else>
            <span>{{ text || '-' }}</span>
          </template>
        </div>
      </template>
    </SCTable>

    <div class="w-full text-right mt-4">
      <SCPagination
        :current="query.page"
        :total="total"
        :page-size="query.pageSize"
        show-size-changer
        show-quick-jumper
        @change="handleChangePagination"
        @showSizeChange="onShowSizeChange"
      />
    </div>
  </div>
</template>

<script>
import SCPagination from '@stickearncom/scpagination'

import SCTable from '../index.vue'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
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
        pageSize: 10
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
    },
    handleChangePagination(value) {
      console.log('first', value)
      this.query.page = value
    },
    onShowSizeChange(current, pageSize) {
      console.log({ current, pageSize })
    },
    fetch() {
      this.loading = true
      queryData({
        results: 10,
        ...this.query
      }).then((res) => {
        console.log({ res })
        this.data = res.results.map((result) => {
          result.name = `${result.name.first} ${result.name.last}`
          return result
        })
        this.query.page = res.page
        this.loading = false
      })
    }
  }
}
</script>
