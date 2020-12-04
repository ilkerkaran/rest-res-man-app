/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from 'enzyme';
import Backdrop from './Backdrop';

describe('<Backdrop /> ', () => {
  const fieldProps = {
    show: true,
    onClick: jest.fn()
  };
  let wrapper;
  const Composition = () => <Backdrop {...fieldProps} />;

  beforeEach(() => {
    wrapper = render(<Composition />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
