import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AdminReview from './AdminReview';

describe('AdminReview', () => {
  let props;
  let shallowAdminReview;
  let renderedAdminReview;
  let mountedAdminReview;

  const shallowTestComponent = () => {
    if (!shallowAdminReview) {
      shallowAdminReview = shallow(<AdminReview {...props} />);
    }
    return shallowAdminReview;
  };

  const renderTestComponent = () => {
    if (!renderedAdminReview) {
      renderedAdminReview = render(<AdminReview {...props} />);
    }
    return renderedAdminReview;
  };

  const mountTestComponent = () => {
    if (!mountedAdminReview) {
      mountedAdminReview = mount(<AdminReview {...props} />);
    }
    return mountedAdminReview;
  };  

  beforeEach(() => {
    props = {};
    shallowAdminReview = undefined;
    renderedAdminReview = undefined;
    mountedAdminReview = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
