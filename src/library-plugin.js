import './styles/main.scss'
import './styles/fonts-face.scss'

// Foundations
import SCIcon from './components/foundations/SCIcon/index.vue'
import SCCol from './components/foundations/Layout/SCCol/index.vue'
import SCRow from './components/foundations/Layout/SCRow/index.vue'

// Layouts
import SCSpace from './components/layouts/SCSpace/index.vue'

// Data Display
import SCTable from './components/data-display/SCTable/index.vue'
import SCTableDraggable from './components/data-display/SCTableDraggable/index.vue'
import SCTag from './components/data-display/SCTag/index.vue'
import SCTabs from './components/data-display/SCTabs/index.vue'

// Data Entry
import SCInput from './components/data-entry/SCInput/index.vue'
import SCInputNumber from './components/data-entry/SCInputNumber/index.vue'
import SCInputSearch from './components/data-entry/SCInputSearch/index.vue'
import SCInputPassword from './components/data-entry/SCInputPassword/index.vue'
import SCSelect from './components/data-entry/SCSelect/index.vue'
import SCSelectOption from './components/data-entry/SCSelect/SCSelectOption/index.vue'
import SCMultiSelect from './components/data-entry/SCMultiSelect/index.vue'
import SCTextarea from './components/data-entry/SCTextarea/index.vue'
import SCSwitch from './components/data-entry/SCSwitch/index.vue'
import SCCheckbox from './components/data-entry/SCCheckbox/index.vue'
import SCCheckboxGroup from './components/data-entry/SCCheckboxGroup/index.vue'
import SCRadio from './components/data-entry/SCRadio/index.vue'
import SCRadioButton from './components/data-entry/SCRadioButton/index.vue'
import SCRadioGroup from './components/data-entry/SCRadioGroup/index.vue'
import SCTreeSelect from './components/data-entry/SCTreeSelect/index.vue'

// General
import SCButton from './components/general/SCButton/index.vue'

// Navigation
import SCPagination from './components/navigation/SCPagination/index.vue'
import SCBreadcrumb from './components/navigation/SCBreadcrumb/index.vue'
import SCDropdown from './components/navigation/SCDropdown/index.vue'
import SCDropdownButton from './components/navigation/SCDropdownButton/index.vue'
import SCMenu from './components/navigation/SCMenu/index.vue'
import SCMenuItem from './components/navigation/SCMenuItem/index.vue'

// Feedback
import SCSkeleton from './components/feedback/SCSkeleton/index.vue'
import SCSpin from './components/feedback/SCSpin/index.vue'
<<<<<<< Updated upstream
import SCPopConfirm from './components/feedback/SCPopConfirm/index.vue'
=======
import SCAlert from './components/feedback/SCAlert/index.vue'
>>>>>>> Stashed changes

const components = {
  // Foundations
  SCIcon,
  SCCol,
  SCRow,
  // Layouts
  SCSpace,
  // Data Display
  SCTable,
  SCTableDraggable,
  SCTag,
  SCTabs,
  // Data Entry
  SCInput,
  SCInputNumber,
  SCInputPassword,
  SCInputSearch,
  SCSelect,
  SCSelectOption,
  SCMultiSelect,
  SCTextarea,
  SCSwitch,
  SCCheckbox,
  SCCheckboxGroup,
  SCRadio,
  SCRadioButton,
  SCRadioGroup,
  SCTreeSelect,
  // General
  SCButton,
  // Navigation
  SCPagination,
  SCBreadcrumb,
  SCDropdown,
  SCDropdownButton,
  SCMenu,
  SCMenuItem,
  // Feedback
  SCSkeleton,
  SCSpin,
<<<<<<< Updated upstream
  SCPopConfirm
=======
  SCAlert
>>>>>>> Stashed changes
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
