"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { CiLight } from "react-icons/ci";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { toggleTheme, theme } = useTheme();
  const { data: session } = useSession();
  return (
    <nav className="pt-1 px-3 pb-3 flex justify-between items-center border-b-2 mb-5">
      <div className="flex space-x-4 md:w-1/3 justify-center">
        {/* Left-side buttons */}
        <button
          onClick={toggleTheme}
          className={`border-2 rounded-md p-1 transition-all duration-300 ease-in-out w-[40px] md:w-[230px] ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-300 hover:text-gray-800"
              : "bg-gray-200 text-black border-gray-400 hover:bg-gray-800 hover:text-white"
          }`}
        >
          <span className="hidden md:inline">
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </span>
          <span className="md:hidden flex justify-center items-center">
            {theme === "dark" ? (
              <CiLight className="text-2xl" />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </span>
        </button>
      </div>
      <div className="flex justify-center">
        {/* Text for larger screens */}
        <Link href={"/"} className="hidden md:block text-3xl">
          String Vault
        </Link>

        {/* Image for smaller screens */}
        <Link href={"/"} className="md:hidden">
          <Image alt="Logo" src={"/favicon.png"} width={35} height={35} />
        </Link>
      </div>
      <div className="flex space-x-4 md:w-1/3 justify-center">
        {/* Right-side buttons */}

        {session?.user ? (
          <>
            <Link
              href="/profile"
              className="relative hover:text-gray-500 transition-all ease-in-out duration-150 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Profile
            </Link>
            <Link
              href="/search"
              className="relative hover:text-gray-500 transition-all ease-in-out duration-150 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Search
            </Link>
            <button
              onClick={() => signOut()}
              className="relative hover:text-gray-500 transition-all ease-in-out duration-150 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="hover:text-gray-500 transition-all ease-in-out duration-150"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="hover:text-gray-500 transition-all ease-in-out duration-150"
            >
              Search
            </Link>
            <button
              onClick={() => signIn("google")}
              className="hover:text-gray-500 transition-all ease-in-out duration-150"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
