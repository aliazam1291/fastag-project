    //     'use client';

    //     import { useState } from 'react';
    //     import Link from 'next/link';

    //     export default function AuthForm() {
    //     const [isLogin, setIsLogin] = useState(true);

    //     return (
    //         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
    //         <div className={`wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${!isLogin ? 'h-[540px]' : 'h-[450px]'}`}>
                
    //             {/* Title Text */}
    //             <div className="flex justify-center mb-4">
    //             <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700">
    //                 {isLogin ? 'Login Form' : 'Signup Form'}
    //             </h2>
    //             </div>

    //             {/* Slide Controls */}
    //             <div className="slide-controls relative flex justify-between border border-gray-300 rounded-full overflow-hidden my-4">
    //             <button
    //                 onClick={() => setIsLogin(true)}
    //                 className={`slide w-1/2 py-2 text-center font-medium cursor-pointer transition-colors duration-300 ${isLogin ? 'text-white' : 'text-gray-600'}`}
    //             >
    //                 Login
    //             </button>
    //             <button
    //                 onClick={() => setIsLogin(false)}
    //                 className={`slide w-1/2 py-2 text-center font-medium cursor-pointer transition-colors duration-300 ${!isLogin ? 'text-white' : 'text-gray-600'}`}
    //             >
    //                 Signup
    //             </button>
    //             <div
    //                 className={`slider-tab absolute w-1/2 h-full bg-gradient-to-r from-blue-900 to-blue-500 rounded-full flex items-center justify-center transition-transform duration-700 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}
    //             >
    //                 <span className="text-white font-medium">
    //                 {isLogin ? 'Login' : 'Signup'}
    //                 </span>
    //             </div>
    //             </div>

    //             {/* Form Container */}
    //             <div className="form-container overflow-hidden w-full h-auto">
    //             {isLogin ? (
    //                 <form className="login w-full space-y-4 animate-fadeIn">
    //                 <div className="field">
    //                     <input
    //                     type="text"
    //                     placeholder="Email Address"
    //                     required
    //                     className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
    //                     />
    //                 </div>
    //                 <div className="field">
    //                     <input
    //                     type="password"
    //                     placeholder="Password"
    //                     required
    //                     className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
    //                     />
    //                 </div>
    //                 <div className="pass-link text-right">
    //                     <Link href="#" className="text-blue-500 hover:underline">
    //                     Forgot password?
    //                     </Link>
    //                 </div>
    //                 <div className="field btn">
    //                     <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
    //                     Login
    //                     </button>
    //                 </div>
    //                 <div className="signup-link text-center">
    // <span className="text-gray-600">Not a member?{' '}</span>
    // <Link href="#" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">
    //     Signup now
    // </Link>
    // </div>
    //                 </form>
    //             ) : (
    //                 <form className="signup w-full space-y-4 animate-fadeIn">
    //                 <div className="field">
    //                     <input
    //                     type="text"
    //                     placeholder="Email Address"
    //                     required
    //                     className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
    //                     />
    //                 </div>
    //                 <div className="field">
    //                     <input
    //                     type="password"
    //                     placeholder="Password"
    //                     required
    //                     className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
    //                     />
    //                 </div>
    //                 <div className="field">
    //                     <input
    //                     type="password"
    //                     placeholder="Confirm Password"
    //                     required
    //                     className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
    //                     />
    //                 </div>
    //                 <div className="field btn">
    //                     <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
    //                     Signup
    //                     </button>
    //                 </div>
    //                 <div className="signup-link text-center">
    // <span className="text-gray-600">Already Registered?{' '}</span>
    // <Link href="#" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">
    //     Login now
    // </Link>
    // </div>
    //                 </form>
    //             )}
    //             </div>
    //         </div>
    //         </div>
    //     );
    //     }
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
      <div className={`wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${isLogin ? 'h-[450px]' : 'h-[450px]'}`}>
        
        {/* Title Text */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700">
            {isLogin ? 'Login Form' : 'Signup Form'}
          </h2>
        </div>

        {/* Slide Controls */}
        <div className="slide-controls relative flex justify-between border border-gray-300 rounded-full overflow-hidden my-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`slide w-1/2 py-2 text-center font-medium cursor-pointer transition-colors duration-300 ${isLogin ? 'text-white' : 'text-gray-600'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`slide w-1/2 py-2 text-center font-medium cursor-pointer transition-colors duration-300 ${!isLogin ? 'text-white' : 'text-gray-600'}`}
          >
            Signup
          </button>
          <div
            className={`slider-tab absolute w-1/2 h-full bg-gradient-to-r from-blue-900 to-blue-500 rounded-full flex items-center justify-center transition-transform duration-700 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <span className="text-white font-medium">
              {isLogin ? 'Login' : 'Signup'}
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container overflow-hidden w-full h-auto">
          {isLogin ? (
            <form className="login w-full space-y-4 animate-fadeIn">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div className="pass-link text-right">
                <Link href="#" className="text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="field btn">
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                  Login
                </button>
              </div>
              <div className="signup-link text-center">
                <span className="text-gray-600">Not a member?{' '}</span>
                <Link href="#" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">
                  Signup now
                </Link>
              </div>
            </form>
          ) : (
            <form className="signup w-full space-y-4 animate-fadeIn">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div className="field btn">
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                  Signup
                </button>
              </div>
              <div className="signup-link text-center">
                <span className="text-gray-600">Already Registered?{' '}</span>
                <Link href="#" onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">
                  Login now
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
