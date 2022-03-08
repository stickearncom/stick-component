<template>
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

<script>

import SCSpace from '../index.vue'

export default {
  components: {
    SCSpace
  }
}
</script>
