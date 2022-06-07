<template>
  <div>
    <h4 class="font-medium-lg">
      Dropdown Button:
    </h4>
    <hr class="mb-4">

    <div class="flex">
      <div class="w-6/12">
        <fieldset class="w-11/12">
          <legend class="font-medium-md">
            Basic
          </legend>

          <div class="flex justify-between">
            <SCDropdownButton>
              Hover me
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>

            <SCDropdownButton :trigger="['click']">
              Click me
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
                <SCMenuItem>
                  <a href="javascript:;">2nd menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>

            <SCDropdownButton :disabled="true">
              Disabled
              <SCMenu slot="overlay">
                <SCMenuItem>
                  <a href="javascript:;">1st menu item</a>
                </SCMenuItem>
              </SCMenu>
            </SCDropdownButton>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SCDropdownButton from '../index.vue'
import SCMenu from '../../SCMenu/index.vue'
import SCMenuItem from '../../SCMenuItem/index.vue'

export default {
  components: {
    SCDropdownButton,
    SCMenu,
    SCMenuItem
  }
}
</script>
