import React, { useState } from "react";
import RegForm from '../../forms/Registration';
import { Row, Col, Container } from 'react-bootstrap';
import Stepper from '../Stepper/Stepper';
import Banner from '../Banner/Banner';

const RegistrationForm = (props) => {
    const [currentStep, setCurrentStep] = useState(1); 
    const [stepClicked, setStepClicked] = useState([true, false, false]); 
    const [resetStepper, setResetStepper] = useState(false);
    const [step1Data, setStep1Data] = useState({});
    const [step2Data, setStep2Data] = useState({});  
    const [selectedCertifications, setSelectedCertifications] = useState([]);
    const [email, setEmail] = useState("");
    const [verifiedEmail, setVerifiedEmail] = useState("");

  // Function to handle checkbox change in Step 2
  const handleCheckboxChange = (certification) => {
    // Check if certification is already selected
    const index = selectedCertifications.findIndex((item) => item.id === certification.id);
    if (index !== -1) {
      // Certification already selected, remove it
      setSelectedCertifications((prevSelected) => prevSelected.filter((item, i) => i !== index));
    } else {
      // Certification not selected, add it
      setSelectedCertifications((prevSelected) => [...prevSelected, certification]);
    }
  };

    const formSteps = [
        {
            header: "Primary Contact",
            paragraph: "Want to do business with us? Please fill out the Vendor Request Form and submit for review."
        },
        {
            header: "Business Information"
        },
        {
            header: "Review Registration"
        },
        {
            header: ""
        }
    ];
  
    // On step button click
    const handleStepClick = (step) => {
        setCurrentStep(step); // Update current step state to the clicked step
        setResetStepper(true); // Enable stepper reset
        const updatedSteps = stepClicked.map((_, index) => index + 1 === step);
        setStepClicked(updatedSteps); // Update stepClicked
    };
  
    // Next step button click
    const handleNextStepForm = (step) => {
        setCurrentStep(step);
        const updatedSteps = stepClicked.map((_, index) => index + 1 === step);
        setStepClicked(updatedSteps);
        setResetStepper(false);
    };

    // Reset stepper after form submission
    const handleFormSubmit = () => {
        setCurrentStep(1); // Reset to the first step
        setStepClicked([true, false, false]); // Reset stepClicked
        setResetStepper(false);
    };

    // Update step 1 data
    const handleStep1Data = (data) => {
        setStep1Data(data);
    };

    // Update step 2 data
    const handleStep2Data = (data) => {
        setStep2Data(data);
    };
  
    return (
        <div>
            <Banner isAdminView={false} />
            <Container fluid className='form-container'>
                <Row>
                    <Col sm={3} className="stepper-column">
                        <Stepper currentStep={currentStep} handleStepClick={handleStepClick} stepClicked={stepClicked} resetStepper={resetStepper} />
                    </Col>
                    <Col sm={8} id="regContainer" className='stepper-column text-start'>
                        <div className='formHeader'>
                            <h3 className="formHeader-title">{formSteps[currentStep - 1].header}</h3>
                            <p>{formSteps[currentStep - 1].paragraph}</p>
                        </div>
                        <RegForm
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            handleNextStepForm={handleNextStepForm}
                            resetStepper={resetStepper}
                            handleFormSubmit={handleFormSubmit}
                            step1Data={step1Data} // Pass step 1 data to RegForm
                            step2Data={step2Data} // Pass step 2 data to RegForm
                            handleStep1Data={handleStep1Data} // Pass function to update step 1 data
                            handleStep2Data={handleStep2Data} // Pass function to update step 2 data
                            selectedCertifications={selectedCertifications}
                            verifiedEmail={verifiedEmail}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RegistrationForm;
