import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FormData from './FormData';

describe('FormData', () => {
  let props;
  let shallowFormData;
  let renderedFormData;
  let mountedFormData;

  const shallowTestComponent = () => {
    if (!shallowFormData) {
      shallowFormData = shallow(<FormData {...props} />);
    }
    return shallowFormData;
  };

  const renderTestComponent = () => {
    if (!renderedFormData) {
      renderedFormData = render(<FormData {...props} />);
    }
    return renderedFormData;
  };

  const mountTestComponent = () => {
    if (!mountedFormData) {
      mountedFormData = mount(<FormData {...props} />);
    }
    return mountedFormData;
  };  

  beforeEach(() => {
    props = {};
    shallowFormData = undefined;
    renderedFormData = undefined;
    mountedFormData = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
