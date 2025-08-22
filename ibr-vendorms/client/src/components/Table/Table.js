import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import generateRandomData from './tableData';
import { Card, CardTitle, CardBody, Row, Col, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AdminReview from '../AdminReview/AdminReview'; 
import { useNavigate } from 'react-router-dom'

const AdminTable = ({ onRowSelect }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (index) => {
    onRowSelect(index);
    if (onRowSelect) onRowSelect(index);
    navigate('/Admin-review');
  };

  // Business types
  const businessTypes = ['Manufacturer', 'Manufacturer', 'Supplier', 'Distributor', 'Manufacturer'];

  // Review statuses
  const reviewStatuses = ['Pending', 'Pending', 'Pending', 'Registered', 'Registered'];

  // States
  const states = ['CA', 'TX', 'WA', 'WA', 'OR'];

  // Dates
  const dates = ['12/13/2023', '10/19/2023', '09/09/2023', '05/23/2023', '02/12/2023'];

  return (
    <Card>
      <CardBody>
        <CardTitle className='text-start'>Vendors Registered</CardTitle>
        <hr />
        <Row>
          <Col md="3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col md="3">
            <Form.Control type="date"/>
          </Col>
        </Row>
        <Table striped bordered hover pointer>
          <thead>
            <tr>
              <th>#</th>
              <th>Business Name</th>
              <th>Business Type</th>
              <th>Review Status</th>
              <th>State</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} onClick={() => handleRowClick(index)} className={selectedRow === index ? 'selected' : ''}>
                <td>{index + 1}</td>
                <td>Company name {index + 1}</td>
                <td><Badge bg="secondary">{businessTypes[index]}</Badge></td>
                <td><Badge bg={reviewStatuses[index] === 'Pending' ? 'warning' : 'success'}>{reviewStatuses[index]}</Badge></td>
                <td>{states[index]}</td>
                <td>{dates[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {selectedRow !== null && <AdminReview />} {/* Render AdminReview if a row is selected */}
      </CardBody>
    </Card>
  );
};

export default AdminTable;
