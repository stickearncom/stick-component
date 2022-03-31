<template>
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
import SCTreeSelect from '../index.vue'

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
