
import Link from "next/link"; // Import Link for client-side navigation

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-800'>
          Welcome to My Fastag Customer Support{" "}
        </h1>{" "}
        <p className='text-lg mt-4 text-gray-600'>
          Your go - to app for secure login and signup.{" "}
        </p>{" "}
        <div className='mt-6 space-x-4'>
          {" "}
          {/* Log In Button */}{" "}
          <Link href='/login'>
            <button className='px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Log In{" "}
            </button>{" "}
          </Link>{" "}
          {/* Sign Up Button */}{" "}
          <Link href='/signup'>
            <button className='px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'>
              Sign Up{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
