<template>
  <div>
    <a-row :gutter="[16, 40]">
      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Gray
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.gray"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>

      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Purple
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.purple"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 40]">
      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Yellow
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.yellow"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>

      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Red
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.red"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 40]">
      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Green
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.green"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>

      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Blue
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.blue"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 40]">
      <a-col :span="12">
        <h6 class="font-medium-lg mb-4">
          Extra
        </h6>
        <a-table
          :columns="columns"
          :data-source="colors.extra"
          :pagination="false"
        >
          <template
            v-for="col in [
              'styleName',
              'classBg',
              'hexcode',
              'sample',
              'classText',
            ]"
            :slot="col"
            slot-scope="text, record"
          >
            <div :key="col" class="cell">
              <template v-if="col === 'styleName'">
                <div class="whitespace-nowrap capitalize">
                  {{ record.styleName }}
                </div>
              </template>
              <template v-else-if="col === 'sample'">
                <div
                  class="h-6 w-6 rounded-full border border-gray-400 border-solid"
                  :class="`${record.classBg}`"
                />
              </template>
              <template v-else-if="col === 'classText'">
                <div :class="record.classText">
                  <code>
                    {{ record.classText }}
                  </code>
                </div>
              </template>
              <template v-else-if="col === 'classBg'">
                <div :class="record.classBg">
                  <code>
                    {{ record.classBg }}
                  </code>
                </div>
              </template>
              <template v-else>
                <div>
                  {{ record[col] || "-" }}
                </div>
              </template>
            </div>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Table, Row, Col } from 'ant-design-vue'

import columns from './columnConfig'

export default {
  components: {
    'a-table': Table,
    'a-row': Row,
    'a-col': Col
  },
  data() {
    return {
      columns,
      colors: {
        gray: [
          {
            styleName: 'gray / 1',
            key: 'gray-1',
            classText: 'text-gray-1',
            classBg: 'bg-gray-1',
            hexcode: '#F2F3F6'
          },
          {
            styleName: 'gray / 2',
            key: 'gray-2',
            classText: 'text-gray-2',
            classBg: 'bg-gray-2',
            hexcode: '#E5E6ED'
          },
          {
            styleName: 'gray / 3',
            key: 'gray-3',
            classText: 'text-gray-3',
            classBg: 'bg-gray-3',
            hexcode: '#CBCDDB'
          },
          {
            styleName: 'gray / 4',
            key: 'gray-4',
            classText: 'text-gray-4',
            classBg: 'bg-gray-4',
            hexcode: '#B0B4C8'
          },
          {
            styleName: 'gray / 5',
            key: 'gray-5',
            classText: 'text-gray-5',
            classBg: 'bg-gray-5',
            hexcode: '#969BB6'
          },
          {
            styleName: 'gray / 6',
            key: 'gray-6',
            classText: 'text-gray-6',
            classBg: 'bg-gray-6',
            hexcode: '#7C83A4'
          },
          {
            styleName: 'gray / 7',
            key: 'gray-7',
            classText: 'text-gray-7',
            classBg: 'bg-gray-7',
            hexcode: '#646B90'
          },
          {
            styleName: 'gray / 8',
            key: 'gray-8',
            classText: 'text-gray-8',
            classBg: 'bg-gray-8',
            hexcode: '#525876'
          },
          {
            styleName: 'gray / 9',
            key: 'gray-9',
            classText: 'text-gray-9',
            classBg: 'bg-gray-9',
            hexcode: '#464B65'
          },
          {
            styleName: 'gray / 10',
            key: 'gray-10',
            classText: 'text-gray-10',
            classBg: 'bg-gray-10',
            hexcode: '#2F3243'
          }
        ],
        purple: [
          {
            styleName: 'purple / 1',
            key: 'purple-1',
            classText: 'text-purple-1',
            classBg: 'bg-purple-1',
            hexcode: '#F2ECF9'
          },
          {
            styleName: 'purple / 2',
            key: 'purple-2',
            classText: 'text-purple-2',
            classBg: 'bg-purple-2',
            hexcode: '#E5D9F3'
          },
          {
            styleName: 'purple / 3',
            key: 'purple-3',
            classText: 'text-purple-3',
            classBg: 'bg-purple-3',
            hexcode: '#CCB4E7'
          },
          {
            styleName: 'purple / 4',
            key: 'purple-4',
            classText: 'text-purple-4',
            classBg: 'bg-purple-4',
            hexcode: '#B28EDB'
          },
          {
            styleName: 'purple / 5',
            key: 'purple-5',
            classText: 'text-purple-5',
            classBg: 'bg-purple-5',
            hexcode: '#9868CF'
          },
          {
            styleName: 'purple / 6',
            key: 'purple-6',
            classText: 'text-purple-6',
            classBg: 'bg-purple-6',
            hexcode: '#7F43C4'
          },
          {
            styleName: 'purple / 7',
            key: 'purple-7',
            classText: 'text-purple-7',
            classBg: 'bg-purple-7',
            hexcode: '#6733A2'
          },
          {
            styleName: 'purple / 8',
            key: 'purple-8',
            classText: 'text-purple-8',
            classBg: 'bg-purple-8',
            hexcode: '#4E277A'
          },
          {
            styleName: 'purple / 9',
            key: 'purple-9',
            classText: 'text-purple-9',
            classBg: 'bg-purple-9',
            hexcode: '#44226A'
          },
          {
            styleName: 'purple / 10',
            key: 'purple-10',
            classText: 'text-purple-10',
            classBg: 'bg-purple-10',
            hexcode: '#381C59'
          }
        ],
        yellow: [
          {
            styleName: 'yellow / 1',
            key: 'yellow-1',
            classText: 'text-yellow-1',
            classBg: 'bg-yellow-1',
            hexcode: '#FFFAEC'
          },
          {
            styleName: 'yellow / 2',
            key: 'yellow-2',
            classText: 'text-yellow-2',
            classBg: 'bg-yellow-2',
            hexcode: '#FFF5DA'
          },
          {
            styleName: 'yellow / 3',
            key: 'yellow-3',
            classText: 'text-yellow-3',
            classBg: 'bg-yellow-3',
            hexcode: '#FFEBB5'
          },
          {
            styleName: 'yellow / 4',
            key: 'yellow-4',
            classText: 'text-yellow-4',
            classBg: 'bg-yellow-4',
            hexcode: '#FFE190'
          },
          {
            styleName: 'yellow / 5',
            key: 'yellow-5',
            classText: 'text-yellow-5',
            classBg: 'bg-yellow-5',
            hexcode: '#FFD76A'
          },
          {
            styleName: 'yellow / 6',
            key: 'yellow-6',
            classText: 'text-yellow-6',
            classBg: 'bg-yellow-6',
            hexcode: '#FFCD45'
          },
          {
            styleName: 'yellow / 7',
            key: 'yellow-7',
            classText: 'text-yellow-7',
            classBg: 'bg-yellow-7',
            hexcode: '#FFC420'
          },
          {
            styleName: 'yellow / 8',
            key: 'yellow-8',
            classText: 'text-yellow-8',
            classBg: 'bg-yellow-8',
            hexcode: '#FAB800'
          },
          {
            styleName: 'yellow / 9',
            key: 'yellow-9',
            classText: 'text-yellow-9',
            classBg: 'bg-yellow-9',
            hexcode: '#D69D00'
          },
          {
            styleName: 'yellow / 10',
            key: 'yellow-10',
            classText: 'text-yellow-10',
            classBg: 'bg-yellow-10',
            hexcode: '#B38300'
          }
        ],
        red: [
          {
            styleName: 'red / 1',
            key: 'red-1',
            classText: 'text-red-1',
            classBg: 'bg-red-1',
            hexcode: '#FEEFF0'
          },
          {
            styleName: 'red / 2',
            key: 'red-2',
            classText: 'text-red-2',
            classBg: 'bg-red-2',
            hexcode: '#FEE0E1'
          },
          {
            styleName: 'red / 3',
            key: 'red-3',
            classText: 'text-red-3',
            classBg: 'bg-red-3',
            hexcode: '#FCC0C3'
          },
          {
            styleName: 'red / 4',
            key: 'red-4',
            classText: 'text-red-4',
            classBg: 'bg-red-4',
            hexcode: '#FBA1A6'
          },
          {
            styleName: 'red / 5',
            key: 'red-5',
            classText: 'text-red-5',
            classBg: 'bg-red-5',
            hexcode: '#F98288'
          },
          {
            styleName: 'red / 6',
            key: 'red-6',
            classText: 'text-red-6',
            classBg: 'bg-red-6',
            hexcode: '#F8626A'
          },
          {
            styleName: 'red / 7',
            key: 'red-7',
            classText: 'text-red-7',
            classBg: 'bg-red-7',
            hexcode: '#F6434C'
          },
          {
            styleName: 'red / 8',
            key: 'red-8',
            classText: 'text-red-8',
            classBg: 'bg-red-8',
            hexcode: '#F5222D'
          },
          {
            styleName: 'red / 9',
            key: 'red-9',
            classText: 'text-red-9',
            classBg: 'bg-red-9',
            hexcode: '#E60B16'
          },
          {
            styleName: 'red / 10',
            key: 'red-10',
            classText: 'text-red-10',
            classBg: 'bg-red-10',
            hexcode: '#BF0912'
          }
        ],
        green: [
          {
            styleName: 'green / 1',
            key: 'green-1',
            classText: 'text-green-1',
            classBg: 'bg-green-1',
            hexcode: '#F6FFED'
          },
          {
            styleName: 'green / 2',
            key: 'green-2',
            classText: 'text-green-2',
            classBg: 'bg-green-2',
            hexcode: '#D9F7BE'
          },
          {
            styleName: 'green / 3',
            key: 'green-3',
            classText: 'text-green-3',
            classBg: 'bg-green-3',
            hexcode: '#B7EB8F'
          },
          {
            styleName: 'green / 4',
            key: 'green-4',
            classText: 'text-green-4',
            classBg: 'bg-green-4',
            hexcode: '#A8E777'
          },
          {
            styleName: 'green / 5',
            key: 'green-5',
            classText: 'text-green-5',
            classBg: 'bg-green-5',
            hexcode: '#95DE64'
          },
          {
            styleName: 'green / 6',
            key: 'green-6',
            classText: 'text-green-6',
            classBg: 'bg-green-6',
            hexcode: '#95DE64'
          },
          {
            styleName: 'green / 7',
            key: 'green-7',
            classText: 'text-green-7',
            classBg: 'bg-green-7',
            hexcode: '#73D13D'
          },
          {
            styleName: 'green / 8',
            key: 'green-8',
            classText: 'text-green-8',
            classBg: 'bg-green-8',
            hexcode: '#52C41A'
          },
          {
            styleName: 'green / 9',
            key: 'green-9',
            classText: 'text-green-9',
            classBg: 'bg-green-9',
            hexcode: '#47AA16'
          },
          {
            styleName: 'green / 10',
            key: 'green-10',
            classText: 'text-green-10',
            classBg: 'bg-green-10',
            hexcode: '#3C8E12'
          }
        ],
        blue: [
          {
            styleName: 'blue / 1',
            key: 'blue-1',
            classText: 'text-blue-1',
            classBg: 'bg-blue-1',
            hexcode: '#F0F3FE'
          },
          {
            styleName: 'blue / 2',
            key: 'blue-2',
            classText: 'text-blue-2',
            classBg: 'bg-blue-2',
            hexcode: '#E1E7FC'
          },
          {
            styleName: 'blue / 3',
            key: 'blue-3',
            classText: 'text-blue-3',
            classBg: 'bg-blue-3',
            hexcode: '#C3CEF9'
          },
          {
            styleName: 'blue / 4',
            key: 'blue-4',
            classText: 'text-blue-4',
            classBg: 'bg-blue-4',
            hexcode: '#A5B6F6'
          },
          {
            styleName: 'blue / 5',
            key: 'blue-5',
            classText: 'text-blue-5',
            classBg: 'bg-blue-5',
            hexcode: '#889DF3'
          },
          {
            styleName: 'blue / 6',
            key: 'blue-6',
            classText: 'text-blue-6',
            classBg: 'bg-blue-6',
            hexcode: '#6A85F0'
          },
          {
            styleName: 'blue / 7',
            key: 'blue-7',
            classText: 'text-blue-7',
            classBg: 'bg-blue-7',
            hexcode: '#4C6CED'
          },
          {
            styleName: 'blue / 8',
            key: 'blue-8',
            classText: 'text-blue-8',
            classBg: 'bg-blue-8',
            hexcode: '#2F54EB'
          },
          {
            styleName: 'blue / 9',
            key: 'blue-9',
            classText: 'text-blue-9',
            classBg: 'bg-blue-9',
            hexcode: '#163DDB'
          },
          {
            styleName: 'blue / 10',
            key: 'blue-10',
            classText: 'text-blue-10',
            classBg: 'bg-blue-10',
            hexcode: '#1233B6'
          }
        ],
        extra: [
          {
            styleName: 'white / 1',
            key: 'white-1',
            classText: 'text-white-1',
            classBg: 'bg-white-1',
            hexcode: '#FFFFFF'
          }
        ]
      }
    }
  }
}
</script>
