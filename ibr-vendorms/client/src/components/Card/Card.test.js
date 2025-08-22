import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let props;
  let shallowCard;
  let renderedCard;
  let mountedCard;

  const shallowTestComponent = () => {
    if (!shallowCard) {
      shallowCard = shallow(<Card {...props} />);
    }
    return shallowCard;
  };

  const renderTestComponent = () => {
    if (!renderedCard) {
      renderedCard = render(<Card {...props} />);
    }
    return renderedCard;
  };

  const mountTestComponent = () => {
    if (!mountedCard) {
      mountedCard = mount(<Card {...props} />);
    }
    return mountedCard;
  };  

  beforeEach(() => {
    props = {};
    shallowCard = undefined;
    renderedCard = undefined;
    mountedCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
