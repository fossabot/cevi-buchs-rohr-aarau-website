import { shallowMount } from '@vue/test-utils'
import Album from '@/pages/mitglieder/album.vue'

describe('Album', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Album)
    expect(wrapper).toBeTruthy()
  })
})
