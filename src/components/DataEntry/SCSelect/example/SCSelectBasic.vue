<template>
  <div>
    <h4 class="font-medium-lg">
      Select basic:
    </h4>
    <hr class="mb-4">

    <h5 class="font-medium-md mb-2">
      Use select option:
    </h5>
    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          style="width: 90%"
          allow-clear
          @change="handleChange"
        >
          <SCSelectOption value="jack">
            Jack
          </SCSelectOption>
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
          <SCSelectOption value="disabled" disabled>
            Disabled
          </SCSelectOption>
          <SCSelectOption value="Yiminghe">
            yiminghe
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect default-value="lucy" style="width: 90%" disabled>
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          style="width: 90%"
          loading
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>

    <h5 class="font-medium-md mb-2 my-6">
      Use options:
    </h5>
    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          default-value="lucy"
          placeholder="Please select"
          style="width: 90%"
          :options="options1"
          @change="handleChange"
        />
      </div>

      <div class="w-1/3">
        <SCSelect
          default-value="lucy"
          style="width: 90%"
          :options="options2"
          disabled
        />
      </div>

      <div class="w-1/3">
        <SCSelect
          default-value="lucy"
          placeholder="Please select"
          style="width: 90%"
          :options="options3"
          loading
        />
      </div>
    </div>
  </div>
</template>

<script>
import SCSelect from '../index.vue'
import SCSelectOption from '../SCSelectOption/index.vue'

export default {
  components: {
    SCSelect,
    SCSelectOption
  },
  data() {
    return {
      options1: [
        {
          value: 'jack',
          label: 'Jack'
        },
        {
          value: 'lucy',
          label: 'Lucy'
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true
        },
        {
          value: 'yiminghe',
          label: 'Yiminghe'
        }
      ],
      options2: [
        {
          value: 'lucy',
          label: 'Lucy'
        }
      ],
      options3: [
        {
          value: 'lucy',
          label: 'Lucy'
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log('value', value)
    }
  }
}
</script>
