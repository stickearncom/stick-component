import './styles/main.scss'
import './styles/fonts-face.scss'

// Foundations
import SCIcon from './components/foundations/SCIcon/index.vue'
import SCCol from './components/foundations/Layout/SCCol/index.vue'
import SCRow from './components/foundations/Layout/SCRow/index.vue'

// Data Entry
import SCInput from './components/DataEntry/SCInput/index.vue'
import SCInputNumber from './components/DataEntry/SCInputNumber/index.vue'

// Components
import SCButton from './components/SCButton/index.vue'

const components = {
  SCIcon,
  SCCol,
  SCRow,
  SCInput,
  SCInputNumber,
  SCButton
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
