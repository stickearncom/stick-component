import SCSkeleton from '../index.vue'
import SCSkeletonBasic from '../example/SCSkeletonBasic.vue'

export default {
  title: 'Feedback/Skeleton',
  component: SCSkeleton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCSkeletonBasic },
  template: '<SCSkeletonBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Skeleton:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCSkeleton />
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Custom size & radius
          </legend>

          <div>
            <SCSkeleton height="22px" width="60%" />
            <SCSkeleton height="22px" width="90%" radius="6px" />
            <SCSkeleton height="22px" width="50%" radius="8px" />
            <SCSkeleton height="22px" width="100%" radius="10px" />
          </div>
        </fieldset>
      </div>

      <div class="w-4/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Circle
          </legend>

          <div>
            <SCSkeleton height="50px" width="50px" type="circle" />
            <SCSkeleton height="50px" width="50px" type="circle" />
            <SCSkeleton height="50px" width="50px" type="circle" />
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
