import SCMultiSelect from '../index.vue'
import SCMultiSelectBasic from '../example/SCMultiSelectBasic.vue'
import SCMultiSelectSize from '../example/SCMultiSelectSize.vue'
import SCMultiSelectMultiple from '../example/SCMultiSelectMultiple.vue'
import SCMultiSelectTags from '../example/SCMultiSelectTags.vue'
import SCMultiSelectAsynchronous from '../example/SCMultiSelectAsynchronous.vue'

export default {
  title: 'Data Entry/Select/Multi Select',
  component: SCMultiSelect,
  argTypes: {
    align: { control: { type: 'select', options: ['start', 'end', 'center', 'baseline'] } },
    direction: { control: { type: 'select', options: ['vertical', 'horizontal'] } },
    size: { control: { type: 'select', options: ['small', 'middle', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCMultiSelectBasic },
  template: '<SCMultiSelectBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
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
export default {
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
      return \`\${name} — [\${language}]\`
    }
  }
}
</script>
`
    }
  }
}

export const Size = () => ({
  components: { SCMultiSelectSize },
  template: `<div>
    <SCMultiSelectSize />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<template>
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
export default {
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
      return \`\${name} — [\${language}]\`
    }
  }
}
</script>
`
    }
  }
}

export const Multiple = () => ({
  components: { SCMultiSelectMultiple },
  template: `<div>
    <SCMultiSelectMultiple />
  </div>
  `
})

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>
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
export default {
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
`
    }
  }
}

export const Tags = () => ({
  components: { SCMultiSelectTags },
  template: `<div>
    <SCMultiSelectTags />
  </div>
  `
})

Tags.parameters = {
  docs: {
    source: {
      code: `<template>
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
const options = []

for (let i = 0; i < 25; i += 1) {
  options.push({
    name: (i + 9).toString(36) + i,
    label: (i + 9).toString(36) + i
  })
}

export default {
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
`
    }
  }
}

export const Asynchronous = () => ({
  components: { SCMultiSelectAsynchronous },
  template: `<div>
    <SCMultiSelectAsynchronous />
  </div>
  `
})

Asynchronous.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Multiselect asynchronous:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Large:
          </legend>

          <SCMultiSelect
            class="w-11/12"
            :internal-search="false"
            :clear-on-select="false"
            :close-on-select="false"
            :show-no-results="false"
            label="name"
            track-by="code"
            placeholder="Type to search"
            open-direction="bottom"
            :options="countries"
            multiple
            multiple-with-tag
            searchable
            :loading="isLoading"
            :options-limit="300"
            :limit="3"
            :limit-text="limitText"
            :max-height="600"
            hide-selected
            size="large"
            @search-change="asyncFind"
            @input="selectedCountries = $event"
          >
            <template slot="tag" slot-scope="props">
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span class="custom__remove" @click="props.remove(props.option)">
                  <SCIcon type="times-solid" />
                </span>
              </span>
            </template>
            <template slot="clear" slot-scope="props">
              <div
                v-if="selectedCountries.length"
                class="multiselect__clear"
                @mousedown.prevent.stop="clearAll(props.search)"
              />
            </template>
            <span slot="noResult">
              Oops! No elements found. Consider changing the search query.
            </span>
          </SCMultiSelect>
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
          ><code>{{ selectedCountries }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCMultiSelect
            class="w-11/12"
            :internal-search="false"
            :clear-on-select="false"
            :close-on-select="false"
            :show-no-results="false"
            label="name"
            track-by="code"
            placeholder="Type to search"
            open-direction="bottom"
            :options="countries"
            multiple
            multiple-with-tag
            searchable
            :loading="isLoading"
            :options-limit="300"
            :limit="3"
            :limit-text="limitText"
            :max-height="600"
            hide-selected
            @search-change="asyncFind"
            @input="selectedCountries = $event"
          >
            <template slot="tag" slot-scope="props">
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span class="custom__remove" @click="props.remove(props.option)">
                  <SCIcon type="times-solid" />
                </span>
              </span>
            </template>
            <template slot="clear" slot-scope="props">
              <div
                v-if="selectedCountries.length"
                class="multiselect__clear"
                @mousedown.prevent.stop="clearAll(props.search)"
              />
            </template>
            <span slot="noResult">
              Oops! No elements found. Consider changing the search query.
            </span>
          </SCMultiSelect>
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
          ><code>{{ selectedCountries }}</code></pre>
        </fieldset>
      </div>

      <div class="w-1/3">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Small:
          </legend>

          <SCMultiSelect
            class="w-11/12"
            :internal-search="false"
            :clear-on-select="false"
            :close-on-select="false"
            :show-no-results="false"
            label="name"
            track-by="code"
            placeholder="Type to search"
            open-direction="bottom"
            :options="countries"
            multiple
            multiple-with-tag
            searchable
            :loading="isLoading"
            :options-limit="300"
            :limit="3"
            :limit-text="limitText"
            :max-height="600"
            hide-selected
            size="small"
            @search-change="asyncFind"
            @input="selectedCountries = $event"
          >
            <template slot="tag" slot-scope="props">
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span class="custom__remove" @click="props.remove(props.option)">
                  <SCIcon type="times-solid" />
                </span>
              </span>
            </template>
            <template slot="clear" slot-scope="props">
              <div
                v-if="selectedCountries.length"
                class="multiselect__clear"
                @mousedown.prevent.stop="clearAll(props.search)"
              />
            </template>
            <span slot="noResult">
              Oops! No elements found. Consider changing the search query.
            </span>
          </SCMultiSelect>
          <pre
            class="language-json px-2 py-3 mt-2 bg-gray-300 w-11/12"
          ><code>{{ selectedCountries }}</code></pre>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { ajaxFindCountry } from './countriesApi'

export default {
  data() {
    return {
      selectedCountries: [],
      countries: [],
      isLoading: false
    }
  },
  methods: {
    limitText(count) {
      return \`and \${count} other countries\`
    },
    asyncFind(query) {
      this.isLoading = true
      ajaxFindCountry(query).then((response) => {
        this.countries = response
        this.isLoading = false
      })
    },
    clearAll() {
      this.selectedCountries = []
    }
  }
}
</script>
`
    }
  }
}
