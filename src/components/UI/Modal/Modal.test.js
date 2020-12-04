/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from 'enzyme';
import Modal from './Modal';

describe('<Modal /> ', () => {
  const fieldProps = {
    show: true,
    onClose: jest.fn()
  };
  let wrapper;
  const Composition = () => <Modal {...fieldProps} />;

  beforeEach(() => {
    wrapper = render(<Composition />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
