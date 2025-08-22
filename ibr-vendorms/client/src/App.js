import React, { useState } from 'react';
import './App.css';
import './App.scss';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Templates/Form-Container';
import EmailVerificationScreen from './components/EmailVerification/EmailVerification';
import AdminHome from './components/AdminHome';
import Banner from './components/Banner/Banner';
import AdminReview from './components/AdminReview';

function App() {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const handleEmailVerified = () => {
    setIsEmailVerified(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<EmailVerificationScreen onEmailVerified={handleEmailVerified} 
          />}
        />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin-review" element={<AdminReview />} />
      </Routes>
    </div>
  );
}

export default App;
