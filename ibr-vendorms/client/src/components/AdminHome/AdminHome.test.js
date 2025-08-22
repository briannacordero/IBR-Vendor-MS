import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AdminHome from './AdminHome';

describe('AdminHome', () => {
  let props;
  let shallowAdminHome;
  let renderedAdminHome;
  let mountedAdminHome;

  const shallowTestComponent = () => {
    if (!shallowAdminHome) {
      shallowAdminHome = shallow(<AdminHome {...props} />);
    }
    return shallowAdminHome;
  };

  const renderTestComponent = () => {
    if (!renderedAdminHome) {
      renderedAdminHome = render(<AdminHome {...props} />);
    }
    return renderedAdminHome;
  };

  const mountTestComponent = () => {
    if (!mountedAdminHome) {
      mountedAdminHome = mount(<AdminHome {...props} />);
    }
    return mountedAdminHome;
  };  

  beforeEach(() => {
    props = {};
    shallowAdminHome = undefined;
    renderedAdminHome = undefined;
    mountedAdminHome = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
