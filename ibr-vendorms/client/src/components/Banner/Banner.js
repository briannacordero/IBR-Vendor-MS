import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Banner = ({ isAdminView }) => {
  const [title, setTitle] = useState(isAdminView ? "Admin Dashboard" : "Vendor Registration Form");

  useEffect(() => {
    setTitle(isAdminView ? "Admin Dashboard" : "Vendor Registration Form");
    console.log('Title updated:', title);
  }, [isAdminView]);

  return (
    <div className='banner'>
      <Container fluid>
        <h1 className='text-start px-5'>{title}</h1>
      </Container>
    </div>
  );
};

Banner.propTypes = {
  isAdminView: PropTypes.bool.isRequired,
};

export default Banner;
