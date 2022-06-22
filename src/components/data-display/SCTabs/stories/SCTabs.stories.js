import SCTabs from '../index.vue'
import SCTabsBasic from '../example/SCTabsBasic.vue'
import SCTabsVertical from '../example/SCTabsVertical.vue'

export default {
  title: 'Data Display/Tabs',
  component: SCTabs
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCTabsBasic },
  template: '<SCTabsBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Tabs:
    </h4>
    <hr class="mb-4">

    <div class="flex flex-col">
      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Tabs with icon
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListLarge" size="large" icon-type="setting-outline" @change="callback" />
          </div>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListDefault" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsListSmall" size="small" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Position
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="top" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" icon-type="setting-outline" @change="callback" />
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

export const Vertical = () => ({
  components: { SCTabsVertical },
  template: `<div>
    <SCTabsVertical />
  </div>
  `
})

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <h4 class="font-medium-lg">
      Tabs Vertical:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12 mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-6/12 mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Tabs with icon
          </legend>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>
    </div>

    <div class="flex">
      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Size
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListLarge" tab-position="left" size="large" icon-type="setting-outline" @change="callback" />
          </div>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsListDefault" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsListSmall" tab-position="left" size="small" icon-type="setting-outline" @change="callback" />
          </div>
        </fieldset>
      </div>

      <div class="w-full mb-10">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Position
          </legend>

          <div class="mb-7">
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="left" icon-type="setting-outline" @change="callback" />
          </div>

          <div>
            <SCTabs v-model="activeKey" :options="tabsList" tab-position="right" icon-type="setting-outline" @change="callback" />
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
