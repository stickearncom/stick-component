<template>
  <div>
    <h4 class="font-medium-lg">
      Select custom dropdown:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/2">
        <SCSelect default-value="lucy" :options="options" style="width: 120px">
          <template #dropdownRender="{ menu }">
            <div>
              <v-nodes :vnodes="menu" />
              <hr>
              <div
                style="padding: 11px 16px; cursor: pointer;"
                @mousedown="e => e.preventDefault()"
                @click="addItem"
              >
                <SCIcon style="color: #7F43C4" type="plus-circle-solid" /> Add item
              </div>
            </div>
          </template>
        </SCSelect>
      </div>
    </div>
  </div>
</template>

<script>
import SCIcon from '@stickearncom/scicon'
import SCSelect from '../index.vue'

let index = 0
export default {
  components: {
    SCIcon,
    SCSelect,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      items: ['jack', 'lucy'],
      options: [
        {
          value: 'lucy',
          label: 'Lucy'
        }
      ]
    }
  },
  methods: {
    addItem() {
      console.log('addItem')
      index += 1
      this.options.push({
        value: `item-${index}`,
        label: `New item ${index}`
      })
    }
  }
}
</script>
