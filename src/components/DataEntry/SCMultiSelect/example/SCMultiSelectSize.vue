<template>
  <div>
    <h4 class="font-medium-lg">
      Multiselect size:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Large:
          </legend>

          <SCMultiSelect
            :options="options"
            :searchable="false"
            :close-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
            size="large"
            @select="value = $event"
          />
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ value }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCMultiSelect
            :current-value="valueObject"
            label="name"
            placeholder="Select one"
            :options="optionsObject"
            :searchable="false"
            :allow-empty="false"
            @select="valueObject = $event"
          />
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ valueObject }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Small:
          </legend>

          <SCMultiSelect
            :current-value="valueObject"
            track-by="name"
            label="name"
            :custom-label="nameWithLang"
            placeholder="Select one"
            :options="optionsObject"
            :searchable="false"
            :allow-empty="false"
            size="small"
            @select="valueObject = $event"
          />
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300"
          ><code>{{ valueObject }}</code></pre>
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
