"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { Button } from '@medusajs/ui';
import UnderlineLink from "@modules/common/components/interactive-link"

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
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
        <div className="py-12">
          <div className="w-full flex justify-center px-8 py-8">
            <div className='max-w-sm w-full flex flex-col items-center'>
              <h1 className='text-center font-semibold text-xl'>Reset Password</h1>
              <h3 className='text-md mb-4'>Enter your email to receive a password reset link</h3>
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
              {isSent && !error && <p className='h-14 text-center mt-6 bg-green-200 items-center justify-center p-5 flex rounded-lg'> Check your email for password reset.</p>}
              {!isSent && error && <p className='h-14 text-center mt-6 bg-red-200 items-center justify-center flex rounded-lg'>Error try again or contact us</p>}

              <Button variant={"primary"} disabled={isSent && !error} className=' w-full mt-6 pt-3 pb-3 rounded-md' onClick={handleResetPassword}>Reset Password</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;