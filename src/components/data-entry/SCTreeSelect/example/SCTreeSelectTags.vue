<template>
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
            :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
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
            :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
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
            :data-name="`Label ${value.length ? '('+value.length+')' : ''}`"
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
import SCTreeSelect from '../index.vue'

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
  components: {
    SCTreeSelect
  },
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
