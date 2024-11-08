// pages/signup.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
      <div className="wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
        
        <div className="login-link text-center">
          Already a member?{' '}
          <Link href="/login">
            <p className="text-blue-500 hover:underline">Login now</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
