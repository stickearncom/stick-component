<template>
  <div>
    <h4 class="font-medium-lg">
      Alert:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-12/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCAlert text="Hello There!" class="mb-4" />
            <SCAlert text="Hello There!" show-icon class="mb-4" />

            <SCAlert
              text="Hello Error!"
              type="error"
              description="Interactively monetize corporate alignments."
              class="mb-4"
            />
            <SCAlert
              text="Hello Error!"
              type="error"
              description="Interactively monetize corporate alignments."
              show-icon
              class="mb-4"
            />

            <SCAlert
              text="Hello Info!"
              type="info"
              description="Interactively monetize corporate alignments."
              class="mb-4"
            />
            <SCAlert
              text="Hello Info!"
              type="info"
              description="Interactively monetize corporate alignments."
              show-icon
            />
          </div>
        </fieldset>
      </div>
      <div class="w-6/12">
        <fieldset class="w-12/12">
          <legend class="font-medium-md">
            Banner
          </legend>

          <div>
            <SCAlert
              text="Hello Closable Banner!"
              :banner="true"
              :closable="true"
              description="Interactively monetize corporate alignments."
            />
            <br>
            <SCAlert
              text="Hello Closable Error Banner!"
              type="error"
              description="Interactively monetize corporate alignments."
              :banner="true"
              :closable="true"
              @close="handleClose"
            />
            <br>
            <SCAlert
              text="Hello Info Banner!"
              type="info"
              description="Interactively monetize corporate alignments."
              :banner="true"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCAlert from '../index.vue'

export default {
  components: {
    SCAlert
  },
  methods: {
    handleClose() {
      console.log('closed')
    }
  }
}
</script>
