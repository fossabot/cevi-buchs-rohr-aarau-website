import { shallowMount } from '@vue/test-utils'
import Schnuppern from '@/pages/interessierte/schnuppern.vue'

describe('Schnuppern', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Schnuppern, {
      stubs: [
        'nuxt-link',
        'v-form',
        'v-text-field',
        'v-menu',
        'v-date-picker',
        'v-textarea',
        'v-snackbar',
        'v-btn'
      ]
    })
    expect(wrapper).toBeTruthy()
  })
})
