import React from "react";
import Link from "next/link";
import { MdOutlinePassword } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const SignUp = () => {
  return (
    <main className="flex flex-col items-center justify-center px-20 text-center min-h-screen py-2">
      <div className="bg-white text-black rounded-2xl flex w-2/3 max-w-4xl">
        <div className="w-2/5 p-5 bg-indigo-500 rounded-2xl ">
          <h1>Hloo</h1>
          <h2 className="text-3xl font-bold mb-2 ">Hello, Friends</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with ur partner
          </p>

          <Link
            href="../signup.tsx"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
          >
            Sign Up
          </Link>
        </div>
        <div className="p-5 w-3/5">
          <div className="font-bold text-2xl">
            <span className="text-indigo-500">Code</span>unity
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-indigo-500 mb-2">
              Start Your journey by signing up to new Account
            </h2>
            <div className="border-2 w-10 bg-indigo-500 inline-block mb-2"></div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-2xl  w-64 p-2 flex items-center mb-3">
                <FaPhone className="text-gray-400 m-2" />
                <input
                  type="phone number"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="bg-gray-100 outline-none flex-1"
                ></input>
              </div>
              <div className="bg-gray-100 rounded-2xl  w-64 p-2 flex outline-none items-center mb-3">
                <MdOutlinePassword className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="otp"
                  placeholder="Enter password"
                  className="bg-gray-100 outline-none flex-1"
                ></input>
              </div>
              <p className="text-xs w-64 p-2 flex text-center">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </p>
              <div>
                <Link
                  href="#"
                  className="border-2 border-indigo-500 rounded-full px-12 py-2 text-indigo-500 inline-block font-semibold hover:bg-indigo-500 hover:text-white"
                >
                  genarate OTP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
