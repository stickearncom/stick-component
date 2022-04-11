import SCTreeSelect from '../index.vue'
import SCTreeSelectBasic from '../example/SCTreeSelectBasic.vue'
import SCTreeSelectBigData from '../example/SCTreeSelectBigData.vue'
import SCTreeSelectTags from '../example/SCTreeSelectTags.vue'

export default {
  title: 'Data Entry/Select/Tree Select',
  component: SCTreeSelect,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTreeSelectBasic },
  template: '<SCTreeSelectBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Tree select:
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
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
          />
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Disabled:
          </legend>

          <SCTreeSelect
            v-model="value"
            show-search
            disabled
            style="width: 100%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
          />
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size:
          </legend>

          <SCTreeSelect
            v-model="value"
            show-search
            style="width: 100%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            size="small"
            tree-default-expand-all
          />

          <SCTreeSelect
            v-model="value"
            show-search
            style="width: 100%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
            class="mt-2"
          />

          <SCTreeSelect
            v-model="value"
            show-search
            style="width: 100%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            size="large"
            tree-default-expand-all
            class="mt-2"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2'
      }
    ]
  }
]

export default {
  data() {
    return {
      value: ['0-0-0'],
      treeData
    }
  },
  watch: {
    value(newVal) {
      console.log({ newVal })
    }
  }
}
</script>
`
    }
  }
}

export const BigData = () => ({
  components: { SCTreeSelectBigData },
  template: `<div>
    <SCTreeSelectBigData />
  </div>
  `
})

BigData.parameters = {
  docs: {
    source: {
      code: `<template>
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
import { ajaxFindRegion } from './regionApi'

export default {
  data() {
    return {
      value: [],
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
    
`
    }
  }
}

export const Tags = () => ({
  components: { SCTreeSelectTags },
  template: `<div>
    <SCTreeSelectTags />
  </div>
  `
})

Tags.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Tree select tags:
    </h4>
    <hr class="mb-4">

    <fieldset>
      <legend class="font-medium-md">
        Basic:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-checkable
            size="small"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-checkable
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-checkable
            size="large"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-10">
      <legend class="font-medium-md">
        Max tags:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :max-tag-count="1"
            allow-clear
            tree-checkable
            size="small"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :max-tag-count="1"
            allow-clear
            tree-checkable
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :max-tag-count="1"
            allow-clear
            tree-checkable
            size="large"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-10">
      <legend class="font-medium-md">
        No tags:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :data-name="\`Label \${value.length ? '('+value.length+')' : ''}\`"
            no-tags
            allow-clear
            tree-checkable
            size="small"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :data-name="\`Label \${value.length ? '('+value.length+')' : ''}\`"
            no-tags
            allow-clear
            tree-checkable
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>

        <div class="w-1/3">
          <SCTreeSelect
            v-model="value"
            style="width: 95%"
            :tree-data="treeData"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            :data-name="\`Label \${value.length ? '('+value.length+')' : ''}\`"
            no-tags
            allow-clear
            tree-checkable
            size="large"
            :show-checked-strategy="SHOW_PARENT"
            search-placeholder="Please select"
            @change="handleChange"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { TreeSelect } from 'ant-design-vue'

const { SHOW_PARENT } = TreeSelect
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2'
      }
    ]
  }
]

export default {
  data() {
    return {
      value: ['0-0', '0-1'],
      SHOW_PARENT,
      treeData
    }
  },
  watch: {
    value(newVal) {
      console.log({ newVal })
    }
  },
  methods: {
    handleSearch(value) {
      console.log('search :', value)
    },
    handleChange(value) {
      console.log('selected value:', value)
    }
  }
}
</script>
    
    
`
    }
  }
}
