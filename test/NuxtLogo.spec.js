import { mount } from '@vue/test-utils'
import ProductIem from '@/components/ProductIem.vue'

describe('ProductItem', () => {
  test('test', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
