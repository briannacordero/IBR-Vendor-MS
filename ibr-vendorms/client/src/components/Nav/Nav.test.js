import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  let props;
  let shallowNav;
  let renderedNav;
  let mountedNav;

  const shallowTestComponent = () => {
    if (!shallowNav) {
      shallowNav = shallow(<Nav {...props} />);
    }
    return shallowNav;
  };

  const renderTestComponent = () => {
    if (!renderedNav) {
      renderedNav = render(<Nav {...props} />);
    }
    return renderedNav;
  };

  const mountTestComponent = () => {
    if (!mountedNav) {
      mountedNav = mount(<Nav {...props} />);
    }
    return mountedNav;
  };  

  beforeEach(() => {
    props = {};
    shallowNav = undefined;
    renderedNav = undefined;
    mountedNav = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
