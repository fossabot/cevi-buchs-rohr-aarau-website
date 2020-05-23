import { shallowMount } from '@vue/test-utils'
import Ausbildung from '@/pages/mitglieder/ausbildung.vue'

describe('Ausbildung', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Ausbildung)
    expect(wrapper).toBeTruthy()
  })
})
