import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Index, {
      stubs: ['nuxt-link']
    })
    expect(wrapper).toBeTruthy()
  })
})
