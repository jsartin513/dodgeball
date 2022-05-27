import { mount } from '@vue/test-utils'
import HalfCourt from '@/components/HalfCourt.vue'

describe('HalfCourt', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HalfCourt)
    expect(wrapper.vm).toBeTruthy()
  })
})
