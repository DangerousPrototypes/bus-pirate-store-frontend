"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { Button } from '@medusajs/ui';
type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}



const ResetPassword = ({ setCurrentView }: Props) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const handleResetPassword = () => {
    fetch(`http://localhost:9000/store/customers/password-token`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setIsSent(true);
          setError(false);
        } else {
          throw new Error("Failed to send Reset email");
        }
      })
      .catch((e) => {
        setIsSent(false);
        setError(true);
      });
  };

  return (
    <div className='flex flex-col gap-6 w-3/4 '>
      <h1 className='text-center font-semibold text-xl'>Reset Password</h1>
      <h3 className='text-lg'>Enter your email to receive a password reset link</h3>
      <Input
        label="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        title="Enter a valid email address"
        autoComplete="email"
        required
      />
      {isSent && !error && <p className='h-14 text-center mt-6 bg-green-200 items-center justify-center flex rounded-lg'> Check your email for password reset.</p>}
      {!isSent && error && <p className='h-14 text-center mt-6 bg-red-200 items-center justify-center flex rounded-lg'>Error try again or contact us</p>}

      <Button variant={"primary"} disabled={isSent && !error} className=' w-full mt-6 pt-3 pb-3 rounded-md' onClick={handleResetPassword}>Reset Password</Button>
    </div>
  );
};

export default ResetPassword;