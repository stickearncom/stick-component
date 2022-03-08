import SCSpace from '../index.vue'
import SCSpaceBasic from '../example/SCSpaceBasic.vue'
import SCSpaceVertical from '../example/SCSpaceVertical.vue'
import SCSpaceAlign from '../example/SCSpaceAlign.vue'

export default {
  title: 'Layouts/Space',
  component: SCSpace,
  argTypes: {
    align: { control: { type: 'select', options: ['start', 'end', 'center', 'baseline'] } },
    direction: { control: { type: 'select', options: ['vertical', 'horizontal'] } },
    size: { control: { type: 'select', options: ['small', 'middle', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCSpaceBasic },
  template: '<SCSpaceBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Space basic:
    </h4>
    <hr class="mb-4">

    <div class="w-full block">
      <SCSpace class="bg-blue-100">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>
    </div>

    <div class="mt-6 w-full block">
      <SCSpace class="bg-blue-100" size="large">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>
    </div>

    <div class="mt-6 w-full block">
      <SCSpace class="bg-blue-100" :size="64">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>
    </div>
  </div>
</template>`
    }
  }
}

export const Vertical = () => ({
  components: { SCSpaceVertical },
  template: `<div>
    <SCSpaceVertical />
  </div>
  `
})

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Space vertical:
    </h4>
    <hr class="mb-4">

    <SCSpace size="middle">
      <SCSpace class="bg-blue-100" direction="vertical">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>

      <SCSpace class="bg-blue-100" size="large" direction="vertical">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>

      <SCSpace class="bg-blue-100" :size="64" direction="vertical">
        <div class="px-4 py-6 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-6 bg-red-300">
          Display 2
        </div>
        <div class="px-4 py-6 bg-purple-300">
          Display 3
        </div>
      </SCSpace>
    </SCSpace>
  </div>
</template>
    
`
    }
  }
}

export const Align = () => ({
  components: { SCSpaceAlign },
  template: `<div>
    <SCSpaceAlign />
  </div>
  `
})

Align.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Space align:
    </h4>
    <hr class="mb-4">

    <SCSpace size="middle">
      <SCSpace class="bg-blue-100 h-28" align="center">
        Center
        <div class="px-2 py-4 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-8 bg-red-300">
          Display 2
        </div>
      </SCSpace>

      <SCSpace class="bg-blue-100 h-28" align="start">
        Start
        <div class="px-2 py-4 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-8 bg-red-300">
          Display 2
        </div>
      </SCSpace>

      <SCSpace class="bg-blue-100 h-28" align="end">
        End
        <div class="px-2 py-4 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-8 bg-red-300">
          Display 2
        </div>
      </SCSpace>

      <SCSpace class="bg-blue-100 h-28" align="baseline">
        Baseline
        <div class="px-2 py-4 bg-yellow-300">
          Display 1
        </div>
        <div class="px-4 py-8 bg-red-300">
          Display 2
        </div>
      </SCSpace>
    </SCSpace>
  </div>
</template>
`
    }
  }
}
