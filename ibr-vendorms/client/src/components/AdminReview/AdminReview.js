import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdminReview.scss';
import { Card, CardBody, CardHeader, CardTitle, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormData from '../FormData/FormData';
import Banner from '../Banner/Banner';

const AdminReview = ({ setCurrentStep, isShowing }) => {

  const handleBackClick = () => {
    setCurrentStep(/* provide the appropriate step value here */);
  };

  return (
    <>
      <Row>
		<Button type="button" as={Col} md="1" onClick={handleBackClick} className="mb-3 ms-3" variant="link">
		  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
		  Back
		</Button>
	  </Row>
      <Card id='businessCard' className='mb-4'>
        <CardHeader className='d-flex'>
          <CardTitle as={Col} md='3' className='text-start fs-4 mb-0'>Company Name Inc.</CardTitle>
          <Stack as={Col} direction="horizontal" gap={2}>
            <Badge bg="secondary">Manufactor</Badge>
            <Badge bg="warning" text="dark">
              Distributor
            </Badge>
          </Stack>
        </CardHeader>
        <CardBody>
          <Row className="form-field mb-0">
            <Form.Group as={Col} md="3">
              <Form.Label>Business Address</Form.Label>
              <Form.Control plaintext readOnly defaultValue="123 Main Street" />
              <Form.Control plaintext readOnly defaultValue="Suite 200" />
              <Form.Control plaintext readOnly defaultValue="Washington, Oregon 01234" />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Email</Form.Label>
              <Form.Control plaintext readOnly defaultValue="companyname@companywebsite.com" />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control plaintext readOnly defaultValue='(123) 456-7890' />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Attachments</Form.Label>
              <Button className='d-block' variant="link"><FontAwesomeIcon icon={faFilePdf} />Certifcation_2024.pdf</Button>
            </Form.Group>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <FormData />
        </CardBody>
      </Card>
    </>
  );
};

export default AdminReview;
