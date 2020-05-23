import { shallowMount } from '@vue/test-utils'
import Aktivitaeten from '@/pages/interessierte/aktivitaeten.vue'

describe('Aktivitäten', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Aktivitaeten)
    expect(wrapper).toBeTruthy()
  })
})
