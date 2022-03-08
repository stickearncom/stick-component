<template>
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

<script>

import SCSpace from '../index.vue'

export default {
  components: {
    SCSpace
  }
}
</script>
