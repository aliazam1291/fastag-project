"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup submission logic
    console.log("Signing up with:", { email, password });
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 shadow-md rounded-md w-96'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'> Sign Up </h2>{" "}
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
          <button className='w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600'>
            Sign Up{" "}
          </button>{" "}
        </form>{" "}
        <p className='mt-4 text-center'>
          Already have an account ?{" "}
          <Link href='/login'>
            <p className='text-blue-500'> Log in here </p>{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}
