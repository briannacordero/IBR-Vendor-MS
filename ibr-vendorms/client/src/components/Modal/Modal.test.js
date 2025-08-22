import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  let props;
  let shallowModal;
  let renderedModal;
  let mountedModal;

  const shallowTestComponent = () => {
    if (!shallowModal) {
      shallowModal = shallow(<Modal {...props} />);
    }
    return shallowModal;
  };

  const renderTestComponent = () => {
    if (!renderedModal) {
      renderedModal = render(<Modal {...props} />);
    }
    return renderedModal;
  };

  const mountTestComponent = () => {
    if (!mountedModal) {
      mountedModal = mount(<Modal {...props} />);
    }
    return mountedModal;
  };  

  beforeEach(() => {
    props = {};
    shallowModal = undefined;
    renderedModal = undefined;
    mountedModal = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
