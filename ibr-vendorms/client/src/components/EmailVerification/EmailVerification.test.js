import React from 'react';
import { shallow, render, mount } from 'enzyme';
import EmailVerification from './EmailVerification';

describe('EmailVerification', () => {
  let props;
  let shallowEmailVerification;
  let renderedEmailVerification;
  let mountedEmailVerification;

  const shallowTestComponent = () => {
    if (!shallowEmailVerification) {
      shallowEmailVerification = shallow(<EmailVerification {...props} />);
    }
    return shallowEmailVerification;
  };

  const renderTestComponent = () => {
    if (!renderedEmailVerification) {
      renderedEmailVerification = render(<EmailVerification {...props} />);
    }
    return renderedEmailVerification;
  };

  const mountTestComponent = () => {
    if (!mountedEmailVerification) {
      mountedEmailVerification = mount(<EmailVerification {...props} />);
    }
    return mountedEmailVerification;
  };  

  beforeEach(() => {
    props = {};
    shallowEmailVerification = undefined;
    renderedEmailVerification = undefined;
    mountedEmailVerification = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
