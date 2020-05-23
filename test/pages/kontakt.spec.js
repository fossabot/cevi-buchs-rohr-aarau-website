import { shallowMount } from '@vue/test-utils'
import Kontakt from '@/pages/kontakt.vue'

describe('Kontakt', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Kontakt)
    expect(wrapper).toBeTruthy()
  })
})
