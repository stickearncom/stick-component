import SCPagination from '../index.vue'
import SCPaginationBasic from '../example/SCPaginationBasic.vue'
import SCPaginationMore from '../example/SCPaginationMore.vue'
import SCPaginationTotal from '../example/SCPaginationTotal.vue'
import SCPaginationSimple from '../example/SCPaginationSimple.vue'

export default {
  title: 'Navigation/Pagination',
  component: SCPagination,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small', 'large'] } },
    type: { control: { type: 'select', options: ['default', 'primary', 'dashed', 'text', 'link'] } },
    shape: { control: { type: 'select', options: ['circle', 'round'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCPaginationBasic },
  template: '<SCPaginationBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination basic:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-1/2">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCPagination
            v-model="current"
            :total="50"
            show-less-items
          />
        </fieldset>
      </div>

      <div class="w-1/2">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Small:
          </legend>

          <SCPagination
            v-model="current"
            :total="50"
            show-less-items
            size="small"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 2
    }
  }
}
</script>      
`
    }
  }
}

export const More = () => ({
  components: { SCPaginationMore },
  template: `<div>
    <SCPaginationMore />
  </div>
  `
})

More.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination with more:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Default:
          </legend>

          <SCPagination
            v-model="current"
            :total="500"
            show-less-items
          />
        </fieldset>
      </div>
    </div>

    <div class="flex mt-8">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Changer page size:
          </legend>

          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            @showSizeChange="onShowSizeChange"
          />
          <br>
          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            size="small"
            @showSizeChange="onShowSizeChange"
          />
        </fieldset>
      </div>
    </div>

    <div class="flex mt-8">
      <div class="w-full">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            With jumper:
          </legend>

          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            show-quick-jumper
            @showSizeChange="onShowSizeChange"
            @change="current = $event"
          />
          <br>
          <SCPagination
            v-model="current"
            show-size-changer
            :total="500"
            show-quick-jumper
            size="small"
            @showSizeChange="onShowSizeChange"
            @change="current = $event"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 6,
      pageSize: 20
    }
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>
`
    }
  }
}

export const TotalNumber = () => ({
  components: { SCPaginationTotal },
  template: `<div>
    <SCPaginationTotal />
  </div>
  `
})

TotalNumber.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination total number:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <SCPagination
          v-model="current"
          :total="85"
          :show-total="total => \`Total \${total} items\`"
          :page-size="20"
        />
        <br>
        <SCPagination
          v-model="current"
          :total="85"
          :show-total="(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`"
          :page-size="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 6
    }
  }
}
</script>
`
    }
  }
}

export const SimpleMode = () => ({
  components: { SCPaginationSimple },
  template: `<div>
    <SCPaginationSimple />
  </div>
  `
})

SimpleMode.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Pagination simple:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-full">
        <SCPagination v-model="current" simple :total="50" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 6
    }
  }
}
</script>  
`
    }
  }
}
