/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from 'enzyme'
import DatePicker from './DatePicker'

describe('<DatePicker /> ', () => {
  const fieldProps = {
    label: 'label',
    onChange: jest.fn()
  }
  let wrapper
  const Composition = () => <DatePicker {...fieldProps} />

  beforeEach(() => {
    wrapper = render(<Composition />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
