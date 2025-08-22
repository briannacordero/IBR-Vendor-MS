import React, { useEffect, seState, useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";


const VerificationStatus = {
	pending: "pending",
	invalid: "invalid",
	already_verified: "already_verified",
	success: "success"
}

function VerificationEmail() {
	const [searchParams] = useSearchParams();
	const [verificationStatus, setVerificationStatus] = useState(verificationStatus.pending);
  
	const attemptToVerify = async () => {
	  const code = searchParams.get("code");
	  const email = searchParams.get("email");
	  if (!code || !email) {
		return setVerificationStatus(VerificationStatus.invalid);
	  }
	  const response = await fetch('http://localhost:3000/api/verify-email', {
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			code, 
			email
		})
	  });
	  const result = await response.json();
	  if(result.data === "already verified") {
		return setVerificationStatus(VerificationStatus.already_verified);
	  }
	  setVerificationStatus(VerificationStatus.success);
	};

	useEffect(() => {
		attemptToVerify();
	}, []);
  
	switch (verificationStatus) {
		case VerificationStatus.success: {
			return (
				<div>Email verified.</div>
			);
		}
		case VerificationStatus.already_verified: {
			return (
				<div>This link is expired.</div>
			);
		}
		case VerificationStatus.invalid: {
			return (
				<div>This link is invalid.</div>
			);
		}
		default: {
			return(
				<div>Verifying...</div>
			)
		}
	}
  
  };
  

export default VerificationEmail;

