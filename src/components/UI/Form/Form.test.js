/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { mount } from 'enzyme'
import { Button } from '@material-ui/core'
import { act } from 'react-test-renderer'
import Form from './Form'

describe('<Form /> ', () => {
  const fieldProps = {
    title: 'form-title',
    submitButtonText: 'Send',
    onSubmit: jest.fn(),
    onDiscard: jest.fn()
  }
  let wrapper
  const Composition = () => <Form {...fieldProps} />
  beforeAll(() => {
    wrapper = mount(<Composition />)
  })

  afterAll(() => {
    jest.clearAllMocks()
    if (wrapper) wrapper.unmount()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should trigger onSubmit on click submit', () => {
    // Enzyme will wrap apis including
    // .simulate(), .setProps(),
    // .setContext(), .invoke() with ReactTestUtils.act()
    // so  don't need to manually wrap it.
    wrapper.find('form').simulate('submit')

    expect(fieldProps.onSubmit).toHaveBeenCalled()
  })

  it('should trigger onDiscard on click discard', () => {
    const buttons = wrapper.find(Button)
    act(() => {
      // first button is disard
      buttons.first().simulate('click')
    })
    expect(fieldProps.onDiscard).toHaveBeenCalled()
  })
})
