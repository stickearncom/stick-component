<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Color
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Usage
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Scss
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(column, index) in columns" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div
                    class="h-10 w-full flex items-center px-2"
                    :style="`background-color: ${column.color}`"
                  >
                    <div
                      class="text-xl"
                      :class="
                        +column.name[column.name.length - 1] > 5 ||
                          +column.name[column.name.length - 1] === 0
                          ? 'text-white'
                          : 'text-gray-500'
                      "
                    >
                      {{ column.color }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ column.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ column.usage }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ column.scss }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import columns from './columns'

export default {
  data() {
    return {
      columns
    }
  }
}
</script>
