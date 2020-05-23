import { shallowMount } from '@vue/test-utils'
import Agenda from '@/pages/mitglieder/agenda.vue'

describe('Agenda', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Agenda)
    expect(wrapper).toBeTruthy()
  })
})
