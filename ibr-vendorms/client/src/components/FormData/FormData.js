import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';

const FormData = () => {
  
  const firstName = 'Mark';
  const lastName = 'Otto';
  const email = 'mark.otto@example.com';
  const phoneNumber = '123-456-7890';
  const businessName = 'ABC Company';
  const dba = 'ABC';
  const naicsNumber = '123456789';
  const descriptionOfBusiness = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const businessWebsite = 'www.example.com';
  const registeredWithODOT = 'Yes';
  const registeredWithWSDOT = 'No';
  const federalTaxClassification = 'Sole Proprietorship';
  const ssnOrEIN = '123-45-6789';
  const address = '123 Main St';
  const city = 'Anytown';
  const state = 'WA';
  const zip = '98001';

  return (
    <>
      <Row className="form-field">
        <Form.Group as={Col} md="3">
          <Form.Label>First Name</Form.Label>
          <Form.Control plaintext readOnly defaultValue={firstName} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control plaintext readOnly defaultValue={lastName} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Email</Form.Label>
          <Form.Control plaintext readOnly defaultValue={email} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control plaintext readOnly defaultValue={phoneNumber} />
        </Form.Group>
      </Row>

      {/* Business Information Review */}
      <h5 className='text-start'>Business Information</h5>
      <Row className="form-field">
        <Form.Group as={Col} md="4">
          <Form.Label>Business Name</Form.Label>
          <Form.Control plaintext readOnly defaultValue={businessName} />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Doing Business As (DBA)</Form.Label>
          <Form.Control plaintext readOnly defaultValue={dba} />
        </Form.Group>
        <Form.Group as={Col} md='4'>
          <Form.Label>NAICS Number</Form.Label>
          <Form.Control plaintext readOnly defaultValue={naicsNumber} />
        </Form.Group>
      </Row>

      <Row className="form-field">
        <Form.Group as={Col} md='8'>
          <Form.Label>Description of Business</Form.Label>
          <Form.Control plaintext readOnly type='textarea' defaultValue={descriptionOfBusiness} />
        </Form.Group>
        <Form.Group as={Col} md='4'>
          <Form.Label>Business Website</Form.Label>
          <Form.Control plaintext readOnly defaultValue={businessWebsite} />
        </Form.Group>
      </Row>

      {/* ODOT Registration Review */}
      <Row className='form-field'>
        <Form.Group as={Col} md="6">
          <Form.Label>Are you registered with ODOT?</Form.Label>
          <Form.Control plaintext readOnly value={registeredWithODOT} />
        </Form.Group>
      {/* WSDOT Registration Review */}
        <Form.Group as={Col} md="6">
          <Form.Label>Are you registered with WSDOT?</Form.Label>
          <Form.Control plaintext readOnly value={registeredWithWSDOT} />
        </Form.Group>
      </Row>
      {/* Federal Tax Classification Review */}
      <Row className="form-field">
        <Form.Group as={Col} md="4">
          <Form.Label>Federal Tax Classification</Form.Label>
          <Form.Control plaintext readOnly defaultValue={federalTaxClassification} />
        </Form.Group>
      {/* SSN / EIN Review */}
        <Form.Group as={Col} md="4">
          <Form.Label>SSN or EIN</Form.Label>
          <Form.Control plaintext readOnly defaultValue={ssnOrEIN} />
        </Form.Group>
      </Row>
      {/* Business Address Review */}
      <Row className="form-field">
        <Form.Group as={Col} md="3">
          <Form.Label>Address</Form.Label>
          <Form.Control plaintext readOnly defaultValue={address} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>City</Form.Label>
          <Form.Control plaintext readOnly defaultValue={city} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>State</Form.Label>
          <Form.Control plaintext readOnly defaultValue={state} />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Zip</Form.Label>
          <Form.Control plaintext readOnly defaultValue={zip} />
        </Form.Group>
      </Row>
    </>
  );
};


export default FormData;
