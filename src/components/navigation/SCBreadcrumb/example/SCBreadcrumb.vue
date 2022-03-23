<template>
  <div>
    <h4 class="font-medium-lg">
      Bradcrumb:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCBreadcrumb :routes="routes">
              <template slot="itemRender" slot-scope="props">
                <span v-if="routes.indexOf(props.route) === routes.length - 1">
                  {{ props.route.breadcrumbName }}
                </span>
                <a v-else :href="`${props.paths}`">
                  {{ props.route.breadcrumbName }}
                </a>
              </template>

              <template slot="separator">
                <SCIcon type="angle-right-b-solid" />
              </template>
            </SCBreadcrumb>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCBreadcrumb from '../index.vue'
import SCIcon from '../../../foundations/SCIcon/index.vue'

export default {
  components: {
    SCBreadcrumb,
    SCIcon
  },
  data() {
    return {
      routes: [
        {
          path: 'home',
          breadcrumbName: 'Home'
        },
        {
          path: 'application-center',
          breadcrumbName: 'Application Center'
        },
        {
          path: 'application-list',
          breadcrumbName: 'Application list'
        },
        {
          path: 'application',
          breadcrumbName: 'Application'
        }
      ]
    }
  }
}
</script>
