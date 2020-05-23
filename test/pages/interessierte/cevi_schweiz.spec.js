import { shallowMount } from '@vue/test-utils'
import CeviSchweiz from '@/pages/interessierte/cevi_schweiz.vue'

describe('CeviSchweiz', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CeviSchweiz)
    expect(wrapper).toBeTruthy()
  })
})
