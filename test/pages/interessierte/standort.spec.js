import { shallowMount } from '@vue/test-utils'
import Standort from '@/pages/interessierte/standort.vue'

describe('Standort', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Standort)
    expect(wrapper).toBeTruthy()
  })
})
