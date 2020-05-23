import { shallowMount } from '@vue/test-utils'
import Laedeli from '@/pages/mitglieder/laedeli.vue'

describe('Laedeli', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Laedeli)
    expect(wrapper).toBeTruthy()
  })
})
