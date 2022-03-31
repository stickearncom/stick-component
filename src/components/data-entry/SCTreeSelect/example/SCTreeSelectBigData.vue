<template>
  <div>
    <h4 class="font-medium-lg">
      Tree select big data:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic:
          </legend>

          <SCTreeSelect
            v-model="value"
            show-search
            style="width: 100%"
            :tree-data="countries"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
            @search="handleSearch"
            @change="handleChange"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { TreeSelect } from 'ant-design-vue'
import SCTreeSelect from '../index.vue'

import { ajaxFindRegion } from './regionApi'

const { SHOW_PARENT } = TreeSelect

export default {
  components: {
    SCTreeSelect
  },
  data() {
    return {
      value: [],
      SHOW_PARENT,
      isLoading: false,
      countries: []
    }
  },
  watch: {
    value(newVal) {
      console.log({ newVal })
    }
  },
  mounted() {
    this.asyncFind('')
  },
  methods: {
    handleSearch(value) {
      console.log('search :', value)
    },
    handleChange(value) {
      console.log('selected value:', value)
    },
    asyncFind(query) {
      this.isLoading = true
      ajaxFindRegion(query).then((response) => {
        const resRegion = response.map((res) => {
          res.title = res.name
          res.value = res.name
          res.key = res.name

          res.children = res.regencies.map((regency) => {
            regency.title = regency.name
            regency.value = regency.name
            regency.key = regency.name

            regency.children = regency.districts.map((distric) => {
              distric.title = distric.name
              distric.value = distric.name
              distric.key = distric.name
              return distric
            })
            return regency
          })
          return res
        })
        this.countries = resRegion
        this.isLoading = false
      })
    }
  }
}
</script>
