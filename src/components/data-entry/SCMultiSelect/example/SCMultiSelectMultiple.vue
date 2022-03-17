<template>
  <div>
    <h4 class="font-medium-lg">
      Multiselect multiple:
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
            placeholder="Pick a value"
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            label="name"
            track-by="name"
            preselect-first
            size="large"
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            class="mb-3"
            :options="options"
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            placeholder="Pick a value"
            label="name"
            track-by="name"
            preselect-first
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            :options="options"
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            placeholder="Pick a value"
            label="name"
            track-by="name"
            preselect-first
            size="small"
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

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
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            label="name"
            track-by="name"
            preselect-first
            size="large"
            is-checkbox
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            class="mb-3"
            :options="options"
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            placeholder="Pick a value"
            label="name"
            track-by="name"
            preselect-first
            is-checkbox
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            :options="options"
            multiple
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            preserve-search
            placeholder="Pick a value"
            label="name"
            track-by="name"
            preselect-first
            size="small"
            is-checkbox
            @input="value = $event"
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

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
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            :options="optionsGroup"

            class="mb-3"
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
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

          <SCMultiSelect
            :options="optionsGroup"
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
          >
            <template slot="selection" slot-scope="props">
              <span v-if="props.values.length && !props.isOpen" class="multiselect__single">
                Label ({{ props.values.length }})
              </span>
            </template>
          </SCMultiSelect>

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

export default {
  components: {
    SCMultiSelect
  },
  data() {
    return {
      value: [],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
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
  }
}
</script>
