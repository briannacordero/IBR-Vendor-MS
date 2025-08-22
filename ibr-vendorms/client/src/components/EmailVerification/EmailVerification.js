import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Nav from '../Nav/Nav'; // Import Nav component
import { Link, useNavigate } from 'react-router-dom';

function EmailVerificationScreen({setVerifiedEmail}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyClick = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatusMessage(<div>Email is required.</div>);
      return;
    }
    setShowVerificationInput(true);
    setStatusMessage(<div>Verification code sent to {email}. Please enter the code provided.</div>);
  };

  const handleSubmitVerification = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") {
      setStatusMessage(null);
      setShowVerificationInput(false);
      navigate("/registration"); // Navigate to "/registration" route
    } else {
      setStatusMessage(<div>Invalid verification code. Please try again.</div>);
    }
  };

  return (
    <>
      <Container className='mt-5 text-center'>
        <Card as={Col} md="4" className='mx-auto' id='emailVerify'>
          <Card.Header className='formHeader'>
            <Card.Title className='formHeader-title fs-3'>
              Email Verification
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className='mb-4'>
              To submit the vendor request form, you'll need to verify your email address. We will send a verification code to the email address provided.
            </Card.Subtitle>
            {!showVerificationInput ? (
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Enter email address" required value={email} onChange={onChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide an email address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className='mt-3 w-75' onClick={handleVerifyClick}>Verify Email</Button>
                {statusMessage}
              </Form>
            ) : (
              <Form onSubmit={handleSubmitVerification}>
                <Form.Group>
                  <Form.Label>Enter verification code:</Form.Label>
                  <Form.Control type="text" placeholder="Enter verification code" required value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                </Form.Group>
                <Button type="submit" className='mt-3 w-75'>Submit</Button>
                {statusMessage}
              </Form>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default EmailVerificationScreen;
