<template>
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
</template>

<script>

import SCSpace from '../index.vue'

export default {
  components: {
    SCSpace
  }
}
</script>
