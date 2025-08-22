import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import RegistrationForm from '../components/Templates/Form-Container';
import EmailVerificationScreen from '../components/EmailVerification/EmailVerification';
import AdminHome from '../components/AdminHome';
import Banner from '../components/Banner/Banner';
import AdminReview from '../components/AdminReview';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmailVerificationScreen />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin-review" element={<AdminReview />} />
    </Routes>
  );
};

export default AppRoutes;
