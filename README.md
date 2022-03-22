# Stickearn Design Component
[![npm version](https://badge.fury.io/js/@stickearncom%2Fstickcomponent.svg)](https://badge.fury.io/js/@stickearncom%2Fstickcomponent)

> We made this package only for internal use. See [Live Documetation](https://stick-component-v2.netlify.app/)

### Installing
___
Using npm :
```
// Global install
npm i @stickearncom/stickcomponent

// Specific
npm i @stickearncom/scbuttton
```

Using yarn :
```
// Global install
yarn add @stickearncom/stickcomponent

// Specific
yarn add @stickearncom/scbuttton
```

### Quick Start
___
```
...
// Find `src/main.js ` and add below.
import Vue from 'vue'

// Global

import Components from "@stickearncom/stickcomponent";
import "@stickearncom/stickcomponent/dist/stickcomponent.css";

Vue.use(Components);

// Specific
import SCButton from '@stickearncom/scbutton'
Vue.use(SCButton)
...

/// or you can install on local file.
...
components {
  SCButton
}
...
```

### Usage
___
```
<SCButton>Code here...</SCButton>
```

For more information about how to usage for more components, please read documentation:

### More Components
___
- SCIcon
- SCCol
- SCRow
- SCSpace
- SCTable
- SCInput
- SCInputNumber
- SCInputSearch
- SCSelect
- SCSelectOption
- SCMultiSelect
- SCTextarea
- SCSwitch
- SCCheckbox
- SCCheckboxGroup
- SCRadio
- SCRadioButton
- SCRadioGroup
- SCButton
- SCPagination

### Authors
___
- [@riskinputra](https://github.com/riskinputra) - Idea & Initial work
