import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/gtropy_logo"
          alt="Company Logo"
          width={40}
          height={40}
          className="mr-2" // optional spacing to separate logo and title
        />
        {/* <h1 className="text-xl font-bold">MyAuthApp</h1> */}
      </div>
      {/* Navigation links */}
      <nav className="flex space-x-6">
        <Link href="/">
          <p className="hover:text-gray-300 cursor-pointer">Home</p>
        </Link>
        <Link href="/login">
          <p className="hover:text-gray-300 cursor-pointer">Log In</p>
        </Link>
        <Link href="/signup">
          <p className="hover:text-gray-300 cursor-pointer">Sign Up</p>
        </Link>
      </nav>
    </header>
  );
}
