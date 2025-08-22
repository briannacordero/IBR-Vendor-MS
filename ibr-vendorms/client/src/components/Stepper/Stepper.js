import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleReg } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";

const Stepper = ({ currentStep, handleStepClick, resetStepper }) => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const isActive = (step) => currentStep === step;
  
  const handleStepClickIfActive = (step) => {
    if (isActive(step)) {
      handleStepClick(step);
    }
  };

  const getIcon = (step) => {
    if (isActive(step)) {
      return faCircle;
     } else if (completedSteps.includes(step)) {
      return faCircleCheck;
    } else {
      return faCircleReg;
    }
  };

  const getColor = (step) => {
    if (isActive(step)) {
      return "#03857b";
    } else if (getIcon(step) === faCircleCheck) {
      return "var(--bs-success)";
    } else {
      return "var(--bs-heading-color)";
    }
  };

  useEffect(() => {
    if (!resetStepper) {
      setCompletedSteps((prevCompletedSteps) => {
        if (!prevCompletedSteps.includes(currentStep)) {
          return [...prevCompletedSteps, currentStep];
        }
        return prevCompletedSteps;
      });
    }
  }, [currentStep, resetStepper]);

  return (
    <Container className="stickyCol">
      <div direction="vertical" className="stepper" id="stepper">
        <div className="steps-container">
          <div className="steps d-inline-grid">
            <Button
              className={`step ${currentStep === 1 ? "active" : ""} ${
                completedSteps.includes(1) ? "completed" : ""
              }`}
              onClick={() => handleStepClickIfActive(1)}
              id="1"
              disabled={!resetStepper && currentStep !== 1}
            >
              <FontAwesomeIcon
                icon={getIcon(1)}
                size="xl"
                color={getColor(1)}
              />
              <div className="step-title">
                <div className="step-text">Primary Contact</div>
              </div>
            </Button>
            <Button
              className={`step ${currentStep === 2 ? "active" : ""} ${
                completedSteps.includes(2) ? "completed" : ""
              }`}
              onClick={() => handleStepClickIfActive(2)}
              id="2"
              disabled={!resetStepper && currentStep !== 2}
            >
              <FontAwesomeIcon
                icon={getIcon(2)}
                size="xl"
                color={getColor(2)}
              />
              <div className="step-title">
                <div className="step-text">Business Information</div>
              </div>
            </Button>
            <Button
              className={`step ${currentStep === 3 ? "active" : ""} ${
                completedSteps.includes(3) ? "completed" : ""
              }`}
              onClick={() => handleStepClickIfActive(3)}
              id="3"
              disabled={!resetStepper && currentStep !== 3}
            >
              <FontAwesomeIcon
                icon={getIcon(3)}
                size="xl"
                color={getColor(3)}
              />
              <div className="step-title">
                <div className="step-text">Review Registration</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stepper;
