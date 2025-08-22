import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import UploadCertification from '../components/UploadCertification/UploadCertification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function RegForm({ setCurrentStep, currentStep, handleNextStepForm, handleFormSubmit, verifiedEmail }) {
  const [show, setShow] = useState(false);
  const [registeredWithODOT, setRegisteredWithODOT] = useState('');
  const [registeredWithWSDOT, setRegisteredWithWSDOT] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCertifications, setSelectedCertifications] = useState([]);

  const [showUpload1, setShowUpload1] = useState(false);
  const [showUpload2, setShowUpload2] = useState(false);
  const [showUpload3, setShowUpload3] = useState(false);
  const [showUpload4, setShowUpload4] = useState(false);
  const [showUpload5, setShowUpload5] = useState(false);
  const [showUpload6, setShowUpload6] = useState(false);

  const [validated, setValidated] = useState(false);

  const [manufacturerChecked, setManufacturerChecked] = useState(false);
  const [distributorChecked, setDistributorChecked] = useState(false);
  const [supplierChecked, setSupplierChecked] = useState(false);

  const [individualChecked, setIndividualChecked] = useState(false);
  const [cCorporationChecked, setCCorporationChecked] = useState(false);
  const [sCorporationChecked, setSCorporationChecked] = useState(false);
  const [partnershipChecked, setPartnershipChecked] = useState(false);
  const [trustEstateChecked, setTrustEstateChecked] = useState(false);
  const [llcChecked, setLLCChecked] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };


  const handleResetForm = () => {
    setCurrentStep(1); // Go back to the first step
    setValidated(false); // Reset validation
    setFormSubmitted(false); // Reset form submission status
    handleFormSubmit(); // Reset stepper and other form-related states
  };

  const handleSubmitClick = () => {
    setCurrentStep(4); // Restart the form to the first step
    setValidated(false); // Reset validation
    setFormSubmitted(true);
  };

  const handleManufacturerChange = (e) => {
    setManufacturerChecked(e.target.checked);
  };

  const handleDistributorChange = (e) => {
    setDistributorChecked(e.target.checked);
  };

  const handleSupplierChange = (e) => {
    setSupplierChecked(e.target.checked);
  };

  const handleIndividualChange = (e) => {
    setIndividualChecked(e.target.checked);
  };

  const handleCCorporationChange = (e) => {
    setCCorporationChecked(e.target.checked);
  };

  const handleSCorporationChange = (e) => {
    setSCorporationChecked(e.target.checked);
  };

  const handlePartnershipChange = (e) => {
    setPartnershipChecked(e.target.checked);
  };

  const handleTrustEstateChange = (e) => {
    setTrustEstateChecked(e.target.checked);
  };

  const handleLLCChange = (e) => {
    setLLCChecked(e.target.checked);
  };

  const handleCheckboxChange = (e, certification) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedCertifications([...selectedCertifications, certification]);
    } else {
      setSelectedCertifications(selectedCertifications.filter(cert => cert !== certification));
    }
  };

  const [step1Data, setStep1Data] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [step2Data, setStep2Data] = useState({
    businessName: '',
    DBA: '',
    NAICS: '',
    description: '',
    website: '',
    ODOT: '',
    WSDOT: '',
    taxClass: '',
    SSNEIN: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <Row className="form-field">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  value={step1Data.firstName}
                  onChange={(e) => setStep1Data({ ...step1Data, firstName: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  value={step1Data.lastName}
                  onChange={(e) => setStep1Data({ ...step1Data, lastName: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md="6" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={step1Data.email}
                  onChange={(e) => setStep1Data({ ...step1Data, email: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="phone"
                  placeholder="Phone Number"
                  value={step1Data.phoneNumber}
                  onChange={(e) => setStep1Data({ ...step1Data, phoneNumber: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button className="ms-auto d-flex" onClick={handleNextStep}>Next Step</Button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Row className="form-field">
              <Form.Group as={Col} md="4" controlId="validationBusinessName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Business Name"
                  value={step2Data.businessName}
                  onChange={(e) => setStep2Data({ ...step2Data, businessName: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationDBA">
                <Form.Label>Doing Business As (DBA)</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="DBA"
                  value={step2Data.DBA}
                  onChange={(e) => setStep2Data({ ...step2Data, DBA: e.target.value })}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4'>
                <Form.Label>
                  NAICS Number
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder='NAICS Number'
                  value={step2Data.NAICS}
                  onChange={(e) => setStep2Data({ ...step2Data, NAICS: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md='8' controlId="validationBusinessDescription">
                <Form.Label>Description of Business</Form.Label>
                <Form.Control as="textarea" placeholder='Please provide a brief description of your business.' rows={3} />
              </Form.Group>
              <Form.Group as={Col} md='4'>
                <Form.Label>
                  Business Website
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Business Website'
                  value={step2Data.website}
                  onChange={(e) => setStep2Data({ ...step2Data, website: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md="12" className='d-inline'>
                <Form.Label>Business Type</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    label="Manufacturer"
                    id='manufacturer'
                    checked={manufacturerChecked}
                    onChange={handleManufacturerChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Distributor"
                    id='distributor'
                    checked={distributorChecked}
                    onChange={handleDistributorChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Supplier"
                    id='supplier'
                    checked={supplierChecked}
                    onChange={handleSupplierChange}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md="12">
                <Form.Label>Are you registered with ODOT?
                  <small className='ps-3'>If you are not registered with ODOT, <a href="#" target='_blank'>learn more <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a> about the requirements.</small></Form.Label>
                <Form.Check
                  required
                  type="radio"
                  name="registeredWithODOT"
                  id="yesODOT"
                  label="Yes"
                  value="yes"
                  checked={registeredWithODOT === 'yes'}
                  onChange={() => setRegisteredWithODOT('yes')}
                />
                <Form.Check
                  required
                  type="radio"
                  name="registeredWithODOT"
                  id="noODOT"
                  label="No"
                  value="no"
                  checked={registeredWithODOT === 'no'}
                  onChange={() => setRegisteredWithODOT('no')}
                />
                <Form.Control.Feedback type="invalid">
                  Please select an option.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md="12">
                <Form.Label>Are you registered with WSDOT?
                  <small className='ps-3'>If you are not registered with WSDOT, <a href="#" target="_blank">learn more <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></a> about the requirements.</small>
                </Form.Label>
                <Form.Check
                  required
                  type="radio"
                  name="registeredWithWSDOT"
                  id="yesWSDOT"
                  label="Yes"
                  value="yes"
                  checked={registeredWithWSDOT === 'yes'}
                  onChange={() => setRegisteredWithWSDOT('yes')}
                />
                <Form.Check
                  required
                  type="radio"
                  name="registeredWithWSDOT"
                  id="noWSDOT"
                  label="No"
                  value="no"
                  checked={registeredWithWSDOT === 'no'}
                  onChange={() => setRegisteredWithWSDOT('no')}
                />
                <Form.Control.Feedback type="invalid">
                  Please select an option.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="12" className='d-inline'>
                <Form.Label className='mb-0'>Federal Tax Classification</Form.Label>
                <h6 className='mb-2 small'>Check the appropriate box for federal tax classification of the entity/individual. Check only one of the following six boxes.</h6>
                <div>
                  <Form.Check
                    type="checkbox"
                    label="Individual/sole proprietor"
                    id="individual"
                    checked={individualChecked}
                    onChange={handleIndividualChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="C corporation"
                    id="cCorporation"
                    checked={cCorporationChecked}
                    onChange={handleCCorporationChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="S corporation"
                    id="sCorporation"
                    checked={sCorporationChecked}
                    onChange={handleSCorporationChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Partnership"
                    id="partnership"
                    checked={partnershipChecked}
                    onChange={handlePartnershipChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Trust/estate"
                    id="trustEstate"
                    checked={trustEstateChecked}
                    onChange={handleTrustEstateChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="LLC"
                    id="llc"
                    checked={llcChecked}
                    onChange={handleLLCChange}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="4" controlId="validationCustom07">
                <Form.Label>SSN or EIN</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="SSN or EIN"
                  value={step2Data.SSNEIN}
                  onChange={(e) => setStep2Data({ ...step2Data, SSNEIN: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid SSN or EIN.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="form-field">
              <h6 className='form-field--Header'>Business Address</h6>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" required
                  value={step2Data.address}
                  onChange={(e) => setStep2Data({ ...step2Data, address: e.target.value })} />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required 
                value={step2Data.city}
                onChange={(e) => setStep2Data({ ...step2Data, city: e.target.value })}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required
                  value={step2Data.state}
                  onChange={(e) => setStep2Data({ ...step2Data, state: e.target.value })} />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom06">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required
                  value={step2Data.zip}
                  onChange={(e) => setStep2Data({ ...step2Data, zip: e.target.value })} />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="12">
                <Form.Label>Small and Disadvantaged Business Enterprise Certifications <small>(SBE/DBE/WBE/MBE/VBE/LGBTBE)</small></Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox1"
                    label="Woman-owned businesses (WBE)"
                    onChange={(e) => setShowUpload1(e.target.checked)}
                  />
                  {showUpload1 && <UploadCertification showUploadButton={showUpload1} />}

                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox2"
                    label="Minority-owned businesses (MBE)"
                    onChange={(e) => setShowUpload2(e.target.checked)}
                  />
                  {showUpload2 && <UploadCertification showUploadButton={showUpload2} />}

                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox3"
                    label="Native American Owned Business"
                    onChange={(e) => setShowUpload3(e.target.checked)}
                  />
                  {showUpload3 && <UploadCertification showUploadButton={showUpload3} />}

                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox4"
                    label="Veteran-owned businesses (VBE or VOSB)"
                    onChange={(e) => setShowUpload4(e.target.checked)}
                  />
                  {showUpload4 && <UploadCertification showUploadButton={showUpload4} />}

                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox5"
                    label="Businesses owned by economically disadvantaged individuals (DBE)"
                    onChange={(e) => setShowUpload5(e.target.checked)}
                  />
                  {showUpload5 && <UploadCertification showUploadButton={showUpload5} />}

                  <Form.Check
                    type="checkbox"
                    id="fileUploadCheckbox6"
                    label="Businesses owned by LGBT individuals (LGBTBE)"
                    onChange={(e) => setShowUpload6(e.target.checked)}
                  />
                  {showUpload6 && <UploadCertification showUploadButton={showUpload6} />}
                </div>
              </Form.Group>
            </Row>

            <Row className='d-flex justify-content-between'>
              <Col>
                <Button onClick={handleBackStep}>Back</Button>
              </Col>
              <Col>
                <Button className={`justify-content-end d-flex ms-auto ${currentStep >= 2 ? 'completed' : ''}`} onClick={handleNextStep}>Next Step</Button>
              </Col>
            </Row>
          </>
        )}
        {currentStep === 3 && (
          <>
            <Row className="form-field">
              <Form.Group as={Col} md="6">
                <Form.Label>First Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step1Data.firstName} />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step1Data.lastName} />
              </Form.Group>
            </Row>
            <Row className='form-field'>
              <Form.Group as={Col} md="6">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step1Data.email} />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step1Data.phoneNumber} />
              </Form.Group>
            </Row>

            {/* Business Information Review */}
            <Row className="form-field">
              <Form.Group as={Col} md="4">
                <Form.Label>Business Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.businessName} />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Doing Business As (DBA)</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.DBA} />
              </Form.Group>
              <Form.Group as={Col} md='4'>
                <Form.Label>NAICS Number</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.NAICS} />
              </Form.Group>
            </Row>

            <Row className="form-field">
              <Form.Group as={Col} md='8'>
                <Form.Label>Description of Business</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.description} type='textarea' />
              </Form.Group>
              <Form.Group as={Col} md='4'>
                <Form.Label>Business Website</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.website} />
              </Form.Group>
            </Row>

            {/* ODOT Registration Review */}
            <Row className='form-field'>
              <Form.Group as={Col} md="12">
                <Form.Label>Are you registered with ODOT?</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.ODOT} value={registeredWithODOT === 'yes' ? 'Yes' : 'No'} />
              </Form.Group>
            </Row>
            {/* WSDOT Registration Review */}
            <Row className='form-field'>
              <Form.Group as={Col} md="12">
                <Form.Label>Are you registered with WSDOT?</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.WSDOT} value={registeredWithWSDOT === 'yes' ? 'Yes' : 'No'} />
              </Form.Group>
            </Row>
            {/* Federal Tax Classification Review */}
            <Row className="form-field">
              <Form.Group as={Col} md="12">
                <Form.Label>Federal Tax Classification</Form.Label>
                {individualChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Individual/sole proprietor"
                      checked={individualChecked}
                      readOnly
                    />
                  </div>
                )}
                {cCorporationChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="C corporation"
                      checked={cCorporationChecked}
                      readOnly
                    />
                  </div>
                )}
                {sCorporationChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="S corporation"
                      checked={sCorporationChecked}
                      readOnly
                    />
                  </div>
                )}
                {partnershipChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Partnership"
                      checked={partnershipChecked}
                      readOnly
                    />
                  </div>
                )}
                {trustEstateChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Trust/estate"
                      checked={trustEstateChecked}
                      readOnly
                    />
                  </div>
                )}
                {llcChecked && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="LLC"
                      checked={llcChecked}
                      readOnly
                    />
                  </div>
                )}
              </Form.Group>
            </Row>
            {/* SSN / EIN Review */}
            <Row className="form-field">
              <Form.Group as={Col} md="4">
                <Form.Label>SSN or EIN</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.SSNEIN} />
              </Form.Group>
            </Row>
            {/* Business Address Review */}
            <Row className="form-field">
              <Form.Group as={Col} md="6">
                <Form.Label>Address</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.address} />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>City</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.city} />
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="4">
                <Form.Label>State</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.state} />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Zip</Form.Label>
                <Form.Control plaintext readOnly defaultValue={step2Data.zip} />
              </Form.Group>
            </Row>
            <Row className="form-field">
              <Form.Group as={Col} md="12">
                <Form.Label>Small and Disadvantaged Business Enterprise Certifications (SBE/DBE/WBE/MBE/VBE/LGBTBE)</Form.Label>
                {showUpload1 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Woman-owned businesses (WBE)"
                      checked={showUpload1}
                      readOnly
                    />
                  </div>
                )}
                {showUpload2 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Minority-owned businesses (MBE)"
                      checked={showUpload2}
                      readOnly
                    />
                  </div>
                )}
                {showUpload3 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Native American Owned Business"
                      checked={showUpload3}
                      readOnly
                    />
                  </div>
                )}
                {showUpload4 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Veteran-owned businesses (VBE or VOSB)"
                      checked={showUpload4}
                      readOnly
                    />
                  </div>
                )}
                {showUpload5 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Businesses owned by economically disadvantaged individuals (DBE)"
                      checked={showUpload5}
                      readOnly
                    />
                  </div>
                )}
                {showUpload6 && (
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Businesses owned by LGBT individuals (LGBTBE)"
                      checked={showUpload6}
                      readOnly
                    />
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className='d-flex justify-content-between'>
              <Col className='justify-content-start d-flex'>
                <Button onClick={handleBackStep}>Back</Button>
              </Col>
              <Col>
                <Button className={`justify-content-end d-flex ms-auto ${currentStep >= 2 ? 'completed' : ''}`} onClick={handleNextStep}>Submit</Button>
              </Col>
            </Row>
          </>
        )}
        {currentStep === 4 && (
          <div className='text-center'>
            <h2>Form Submitted Successfully!</h2>
            {/* Add any additional content or redirect logic here */}
            <Button variant="primary" onClick={handleResetForm}>Restart Form</Button>
          </div>
        )}
      </Form>

    </>
  );
}

export default RegForm;
