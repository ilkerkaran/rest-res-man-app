/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from 'enzyme'
import Spinner from './Spinner'

describe('<Spinner /> ', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(<Spinner />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
