import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UploadCertification from './UploadCertification';

describe('UploadCertification', () => {
  let props;
  let shallowUploadCertification;
  let renderedUploadCertification;
  let mountedUploadCertification;

  const shallowTestComponent = () => {
    if (!shallowUploadCertification) {
      shallowUploadCertification = shallow(<UploadCertification {...props} />);
    }
    return shallowUploadCertification;
  };

  const renderTestComponent = () => {
    if (!renderedUploadCertification) {
      renderedUploadCertification = render(<UploadCertification {...props} />);
    }
    return renderedUploadCertification;
  };

  const mountTestComponent = () => {
    if (!mountedUploadCertification) {
      mountedUploadCertification = mount(<UploadCertification {...props} />);
    }
    return mountedUploadCertification;
  };  

  beforeEach(() => {
    props = {};
    shallowUploadCertification = undefined;
    renderedUploadCertification = undefined;
    mountedUploadCertification = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
