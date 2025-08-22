import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs', () => {
  let props;
  let shallowTabs;
  let renderedTabs;
  let mountedTabs;

  const shallowTestComponent = () => {
    if (!shallowTabs) {
      shallowTabs = shallow(<Tabs {...props} />);
    }
    return shallowTabs;
  };

  const renderTestComponent = () => {
    if (!renderedTabs) {
      renderedTabs = render(<Tabs {...props} />);
    }
    return renderedTabs;
  };

  const mountTestComponent = () => {
    if (!mountedTabs) {
      mountedTabs = mount(<Tabs {...props} />);
    }
    return mountedTabs;
  };  

  beforeEach(() => {
    props = {};
    shallowTabs = undefined;
    renderedTabs = undefined;
    mountedTabs = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
