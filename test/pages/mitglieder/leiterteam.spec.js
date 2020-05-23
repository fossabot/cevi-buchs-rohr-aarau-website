import { shallowMount } from '@vue/test-utils'
import Leiterteam from '@/pages/mitglieder/leiterteam.vue'

describe('Leiterteam', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Leiterteam)
    expect(wrapper).toBeTruthy()
  })
})
