// components/Header.js
import Link from "next/link"; // Import Link for client-side navigation

export default function Header() {
  return (
    <header className='w-full p-4 bg-gray-800 text-white flex justify-between items-center'>
      <h1 className='text-xl font-bold'> MyAuthApp </h1>{" "}
      <nav>
        <Link href='/'>
          <p className='mr-4'> Home </p>{" "}
        </Link>{" "}
        <Link href='./login'>
          <p className='mr-4'> Log In </p>{" "}
        </Link>{" "}
        <Link href='/signup'>
          <p> Sign Up </p>{" "}
        </Link>{" "}
      </nav>{" "}
    </header>
  );
}
//ab ka dabra