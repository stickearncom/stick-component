<template>
  <div>
    <fieldset>
      <legend class="font-medium-md">
        Select tags:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="large"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="small"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-8">
      <legend class="font-medium-md">
        Select max tags:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="large"
            allow-clear
            :max-tag-count="2"
            is-checkbox
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            :max-tag-count="2"
            allow-clear
            is-checkbox
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="small"
            allow-clear
            :max-tag-count="2"
            is-checkbox
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-8">
      <legend class="font-medium-md">
        Select max tags text length:
      </legend>

      <div class="flex">
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="large"
            :max-tag-text-length="10"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              Long label: {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            :max-tag-text-length="10"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              Long label: {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
        <div class="w-1/3">
          <SCSelect
            mode="tags"
            style="width: 90%"
            placeholder="Tags Mode"
            :default-value="defaultValue"
            size="small"
            :max-tag-text-length="10"
            @change="handleChange"
          >
            <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
              Long label: {{ (i + 9).toString(36) + i }}
            </SCSelectOption>
          </SCSelect>
        </div>
      </div>
    </fieldset>
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
      defaultValue: ['b2', 'a1', 'e5', 'd4', 'c3', 'f6', 'g1']
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
