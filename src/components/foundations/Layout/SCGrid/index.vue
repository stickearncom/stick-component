<template>
  <div class="sc-grid">
    <div class="markdown">
      <h1 id="Grid" class="font-medium-4xl">
        Grid
      </h1>
      <p>24 Grids System。</p>
      <h2 id="Design-concept" class="font-medium-3xl">
        Design concept
      </h2>
    </div>
    <DesignConcept />
    <div class="markdown">
      <h2 id="Examples">
        Examples
      </h2>
    </div>
    <BasicGrid />
    <FlexAlign />
    <FlexOrder />
    <FlexLayout />

    <quote class="bg-gray-1 px-4 py-6 mt-6 w-full block">
      For more information click <a class="text-blue-7 underline" href="https://antdv.com/components/grid/">here</a>
    </quote>
  </div>
</template>

<script>
import '@/assets/tailwind.css'

import DesignConcept from './components/DesignConcept/index.vue'
import BasicGrid from './components/BasicGrid/index.vue'
import FlexAlign from './components/FlexAlign/index.vue'
import FlexOrder from './components/FlexOrder/index.vue'
import FlexLayout from './components/FlexLayout/index.vue'

export default {
  name: 'SEGrid',
  components: {
    DesignConcept,
    BasicGrid,
    FlexAlign,
    FlexOrder,
    FlexLayout
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>
