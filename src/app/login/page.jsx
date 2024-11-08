// pages/login.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
      <div className="wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
        
        <div className="signup-link text-center">
          Not a member?{' '}
          <Link href="/signup">
            <p className="text-blue-500 hover:underline">Signup now</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
