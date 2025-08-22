import { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post('/api/register', {
        email,
        password,
      });

      setRegistrationStatus('success');
      console.log('Registration successful!', response.data);
    } catch (error) {
      setRegistrationStatus('error');
      console.error('Failed to register:', error);
    }
  };

  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <div>Registration successful! Please check your email to verify your account.</div>;
  } else if (registrationStatus === 'error') {
    statusMessage = <div>Failed to register. Please try again.</div>;
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <button onClick={handleRegisterClick}>Register</button>
      {statusMessage}
    </div>
  );
};

export default UserRegistration;