---
to: <%= absolute_path %>/<%= component_name %>.test.tsx
---
import { customRender } from '@/__tests__/utils'

import { <%= component_name %> } from './'

desscribe('<<%= component_name %> />', () => {
  it('should match snapshot', () => {
    const { container } = customRender(<<%= component_name %> />)
    expect(container).toMatchSnapshot()
  })
})
