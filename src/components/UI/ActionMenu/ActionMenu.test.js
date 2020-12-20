/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from 'enzyme'
import ActionMenu from './ActionMenu'

describe('<ActionMenu /> ', () => {
  const fieldProps = {
    options: []
  }
  let wrapper
  const Composition = () => <ActionMenu {...fieldProps} />

  beforeEach(() => {
    wrapper = render(<Composition />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
