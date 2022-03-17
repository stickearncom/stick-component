import './styles/main.scss'
import './styles/fonts-face.scss'

// Foundations
import SCIcon from './components/foundations/SCIcon/index.vue'
import SCCol from './components/foundations/Layout/SCCol/index.vue'
import SCRow from './components/foundations/Layout/SCRow/index.vue'

// Layouts
import SCSpace from './components/layouts/SCSpace/index.vue'

// Data Entry
import SCInput from './components/data-entry/SCInput/index.vue'
import SCInputNumber from './components/data-entry/SCInputNumber/index.vue'
import SCInputSearch from './components/data-entry/SCInputSearch/index.vue'
import SCSelect from './components/data-entry/SCSelect/index.vue'
import SCSelectOption from './components/data-entry/SCSelect/SCSelectOption/index.vue'
import SCMultiSelect from './components/data-entry/SCMultiSelect/index.vue'
import SCTextarea from './components/data-entry/SCTextarea/index.vue'

// Components
import SCButton from './components/general/SCButton/index.vue'

// Navigation
import SCPagination from './components/navigation/SCPagination/index.vue'

const components = {
  // Foundations
  SCIcon,
  SCCol,
  SCRow,
  // Layouts
  SCSpace,
  // Data Entry
  SCInput,
  SCInputNumber,
  SCInputSearch,
  SCSelect,
  SCSelectOption,
  SCMultiSelect,
  SCTextarea,
  // Components
  SCButton,
  // Navigation
  SCPagination
}

const install = (Vue) => {
  Object.values(components).forEach((component) => {
    const componentName = component.name
    Vue.component(componentName, component)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default ({ ...components, install })
