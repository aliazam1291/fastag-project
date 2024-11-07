"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login submission logic
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 shadow-md rounded-md w-96'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'> Log In </h2>{" "}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 mb-4 border rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            type='password'
            placeholder='Password'
            className='w-full p-3 mb-4 border rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <button className='w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
            Log In{" "}
          </button>{" "}
        </form>{" "}
        <p className='mt-4 text-center'>
          Don 't have an account?{" "}
          <Link href='/signup'>
            <p className='text-blue-500'> Sign up here </p>{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

