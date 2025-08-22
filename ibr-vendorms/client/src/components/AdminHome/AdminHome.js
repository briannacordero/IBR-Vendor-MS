import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdminHome.scss';
import AdminTable from '../Table/Table';
import AdminReview from '../AdminReview';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';

const AdminHome = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowSelect = (index) => {
    setSelectedRowIndex(index);
  };

  return (
    
    <>
    <Banner isAdminView={true} />
      <Container fluid>
        {selectedRowIndex === null ? (
          <AdminTable onRowSelect={handleRowSelect} />
        ) : (
          <AdminReview setCurrentStep={() => setSelectedRowIndex(null)} />
        )}
      </Container>
    </>
  );
};

export default AdminHome;
