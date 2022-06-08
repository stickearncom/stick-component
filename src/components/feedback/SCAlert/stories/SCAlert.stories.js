import SCAlert from '../index.vue'
import SCAlertBasic from '../example/SCAlertBasic.vue'

export default {
  title: 'Feedback/Alert',
  component: SCAlert
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCAlertBasic },
  template: '<SCAlertBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `
    <template>
    <div>
        <h4 class="font-medium-lg">
          Alert:
        </h4>
        <hr class="mb-4">
    
        <div class="flex">
          <div class="w-5/12">
            <fieldset class="w-12/12">
              <legend class="font-medium-md">
                Basic
              </legend>
    
              <div>
                <SCAlert text="Hello There!" />
                <br>
                <SCAlert
                  text="Hello Error!"
                  type="error"
                  description="Interactively monetize corporate alignments."
                />
                <br>
                <SCAlert
                  text="Hello Info!"
                  type="info"
                  description="Interactively monetize corporate alignments."
                />
              </div>
            </fieldset>
          </div>
          <div class="w-5/12">
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
      `
    }
  }
}
