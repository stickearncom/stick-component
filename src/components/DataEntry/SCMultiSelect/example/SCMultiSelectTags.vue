<template>
  <div>
    <h4 class="font-medium-lg">
      Multiselect tags:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic:
          </legend>

          <SCMultiSelect
            class="mb-3"
            :options="options"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            label="name"
            track-by="label"
            size="large"
            @input="value = $event"
            @tag="addTag"
          />

          <SCMultiSelect
            class="mb-3"
            :options="options"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            @input="value = $event"
            @tag="addTag"
          />

          <SCMultiSelect
            :options="options"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            size="small"
            @input="value = $event"
            @tag="addTag"
          />

          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ value }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With checkbox:
          </legend>

          <SCMultiSelect
            class="mb-3"
            :options="options"
            placeholder="Pick a value"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            label="name"
            track-by="name"
            size="large"
            is-checkbox
            @input="value = $event"
            @tag="addTag"
          />

          <SCMultiSelect
            class="mb-3"
            :options="options"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            is-checkbox
            @input="value = $event"
            @tag="addTag"
          />

          <SCMultiSelect
            :options="options"
            taggable
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            size="small"
            is-checkbox
            @input="value = $event"
            @tag="addTag"
          />

          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ value }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With select all:
          </legend>

          <SCMultiSelect
            :options="optionsGroup"
            class="mb-3"
            taggable
            multiple
            group-values="child"
            group-label="groups"
            group-select
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            size="large"
            is-checkbox
            @input="valueGroups = $event"
          />

          <SCMultiSelect
            :options="optionsGroup"

            class="mb-3"
            taggable
            multiple
            group-values="child"
            group-label="groups"
            group-select
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            is-checkbox
            @input="valueGroups = $event"
          />

          <SCMultiSelect
            :options="optionsGroup"
            taggable
            multiple
            group-values="child"
            group-label="groups"
            group-select
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            label="name"
            track-by="name"
            size="small"
            is-checkbox
            @input="valueGroups = $event"
          />

          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ valueGroups }}</code></pre>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCMultiSelect from '../index.vue'

const options = []

for (let i = 0; i < 25; i += 1) {
  options.push({
    name: (i + 9).toString(36) + i,
    label: (i + 9).toString(36) + i
  })
}

export default {
  components: {
    SCMultiSelect
  },
  data() {
    return {
      value: [],
      options,
      valueGroups: [],
      optionsGroup: [
        {
          groups: 'Select all',
          child: [
            { name: 'Vue.js', category: 'Front-end' },
            { name: 'Adonis', category: 'Backend' },
            { name: 'Rails', category: 'Backend' },
            { name: 'Sinatra', category: 'Backend' },
            { name: 'Laravel', category: 'Backend' },
            { name: 'Phoenix', category: 'Backend' }
          ]
        }
      ]
    }
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        label: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>
