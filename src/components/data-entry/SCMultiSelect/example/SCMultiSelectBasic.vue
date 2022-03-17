<template>
  <div>
    <h4 class="font-medium-lg">
      Multiselect basic:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <h5 class="font-medium-md">
          Single select
        </h5>
        <hr class="mb-3 w-11/12">

        <SCMultiSelect
          class="w-11/12"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Pick a value"
          @select="value = $event"
        />
        <pre
          class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
        ><code>{{ value }}</code></pre>
      </div>

      <div class="w-1/3">
        <h5 class="font-medium-md">
          Single select (object)
        </h5>
        <hr class="mb-3 w-11/12">

        <SCMultiSelect
          :current-value="valueObject"
          class="w-11/12"
          label="name"
          placeholder="Select one"
          :options="optionsObject"
          :searchable="false"
          :allow-empty="false"
          @select="valueObject = $event"
        >
          <template slot="singleLabel" slot-scope="props">
            <strong>{{ props.option.name }}</strong> is written in<strong>
              {{ props.option.language }}</strong>
          </template>
        </SCMultiSelect>
        <pre
          class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
        ><code>{{ valueObject }}</code></pre>
      </div>

      <div class="w-1/3">
        <h5 class="font-medium-md">
          Single select search
        </h5>
        <hr class="mb-3 w-11/12">

        <SCMultiSelect
          :current-value="valueObject"
          class="w-11/12"
          track-by="name"
          label="name"
          :custom-label="nameWithLang"
          placeholder="Select one"
          :options="optionsObject"
          :searchable="false"
          :allow-empty="false"
          @select="valueObject = $event"
        />
        <pre
          class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
        ><code>{{ valueObject }}</code></pre>
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
      value: '',
      options: [
        'Select option',
        'options',
        'selected',
        'mulitple',
        'label',
        'searchable',
        'clearOnSelect',
        'hideSelected',
        'maxHeight',
        'allowEmpty',
        'showLabels',
        'onChange',
        'touched'
      ],
      valueObject: null,
      optionsObject: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  },
  methods: {
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`
    }
  }
}
</script>
