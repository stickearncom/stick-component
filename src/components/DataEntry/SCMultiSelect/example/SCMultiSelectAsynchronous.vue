<template>
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
import SCIcon from '@stickearncom/scicon'
import SCMultiSelect from '../index.vue'
import { ajaxFindCountry } from './countriesApi'

export default {
  components: {
    SCMultiSelect,
    SCIcon
  },
  data() {
    return {
      selectedCountries: [],
      countries: [],
      isLoading: false
    }
  },
  methods: {
    limitText(count) {
      return `and ${count} other countries`
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
