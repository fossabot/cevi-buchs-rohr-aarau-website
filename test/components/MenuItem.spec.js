import { shallowMount } from '@vue/test-utils'
import MenuItem from '@/components/MenuItem.vue'

describe('MenuItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MenuItem, {
      stubs: [
        'v-list-item',
        'v-icon',
        'v-list-item-content',
        'v-list-item-title',
        'v-list-item-action'
      ],
      propsData: {
        item: [
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/'
          }
        ]
      }
    })
    expect(wrapper).toBeTruthy()
  })
})
