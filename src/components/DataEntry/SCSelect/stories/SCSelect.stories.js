import SCSelect from '../index.vue'
import SCSelectBasic from '../example/SCSelectBasic.vue'
import SCSelectSize from '../example/SCSelectSize.vue'
import SCSelectSearch from '../example/SCSelectSearch.vue'
import SCSelectTags from '../example/SCSelectTags.vue'
import SCSelectError from '../example/SCSelectError.vue'
import SCSelectMultiple from '../example/SCSelectMultiple.vue'

export default {
  title: 'Data Entry/Select/Select Main',
  component: SCSelect,
  argTypes: {
    mode: { control: { type: 'select', options: ['multiple', 'default', 'tags'] } },
    size: { control: { type: 'select', options: ['small', 'default', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCSelectBasic },
  template: '<SCSelectBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
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
export default {
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
`
    }
  }
}

export const Size = () => ({
  components: { SCSelectSize },
  template: `<div>
    <SCSelectSize />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Select size:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="large"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="small"
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>
  </div>
</template>
`
    }
  }
}

export const WithSearchField = () => ({
  components: { SCSelectSearch },
  template: `<div>
    <SCSelectSearch />
  </div>
  `
})

WithSearchField.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Select with search field:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/2">
        <SCSelect
          show-search
          placeholder="Select a person"
          option-filter-prop="children"
          style="width: 80%"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        >
          <SCSelectOption value="jack">
            Jack
          </SCSelectOption>
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
          <SCSelectOption value="tom">
            Tom
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log(\`selected \${value}\`)
    },
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      console.log('focus')
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
`
    }
  }
}

export const Tags = () => ({
  components: { SCSelectTags },
  template: `<div>
    <SCSelectTags />
  </div>
  `
})

Tags.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Select tags:
    </h4>
    <hr class="mb-4">

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

    <h4 class="font-medium-lg mt-8">
      Select max tags:
    </h4>
    <hr class="mb-4">
    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          mode="tags"
          style="width: 90%"
          placeholder="Tags Mode"
          :default-value="defaultValue"
          size="large"
          :max-tag-count="2"
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
          :max-tag-count="2"
          @change="handleChange"
        >
          <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>

    <h4 class="font-medium-lg mt-8">
      Select max tags text length:
    </h4>
    <hr class="mb-4">
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
  </div>
</template>

<script>export default {
  data() {
    return {
      defaultValue: ['b2', 'a1', 'e5', 'd4', 'c3', 'f6', 'g1']
    }
  },
  methods: {
    handleChange(value) {
      console.log(\`selected \${value}\`)
    }
  }
}
</script>
`
    }
  }
}

export const Error = () => ({
  components: { SCSelectError },
  template: `<div>
    <SCSelectError />
  </div>
  `
})

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Select error:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="large"
          has-error
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          has-error
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>

      <div class="w-1/3">
        <SCSelect
          placeholder="Please select"
          size="small"
          has-error
          style="width: 90%"
        >
          <SCSelectOption value="lucy">
            Lucy
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>
  </div>
</template>
`
    }
  }
}

export const Multiple = () => ({
  components: { SCSelectMultiple },
  template: `<div>
    <SCSelectMultiple />
  </div>
  `
})

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Select multiple:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          :default-value="['a1', 'b2']"
          style="width: 90%"
          placeholder="Please select"
        >
          <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
        </SCSelect>
      </div>
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          :default-value="['a1', 'b2']"
          style="width: 90%"
          placeholder="Please select"
        >
          <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
        </SCSelect>
      </div>
      <div class="w-1/3">
        <SCSelect
          mode="multiple"
          :default-value="['a1', 'b2']"
          style="width: 90%"
          placeholder="Please select"
        >
          <SCSelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </SCSelectOption>
        </SCSelect>
      </div>
    </div>
  </div>
</template>
`
    }
  }
}
