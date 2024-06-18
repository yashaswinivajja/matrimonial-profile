"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";
import Link from "next/link";
import router from "next/router";
import { FaPhone } from "react-icons/fa6";
import Axios from "axios";
import qs from "qs";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(password, phoneNumber);
      // const response = await Axios.post('http://localhost:8080/api/v1/login', { phoneNumber, password });
      const data = qs.stringify({ phoneNumber, password }); // Encode data as query string
      const response = await Axios.post(
        "http://localhost:8080/api/v1/login",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Login successful", response.data);

      router.push("../signup/page.tsx");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <main className="bg-pink-50 flex flex-col items-center justify-center px-20 text-center min-h-screen py-2">
      <div className="bg-white text-black rounded-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 flex flex-col justify-center items-center text-center">
          <div className="font-bold text-left">
            <span className="text-pink-500">Code</span>unity
          </div>
          <div className="py-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 bg-pink-500 inline-block mb-2"></div>
            <div className="flex flex-col items-center">
              <form action="">
                <div className="bg-gray-100 rounded-2xl  w-64 p-2 flex items-center mb-3">
                  <FaPhone className="text-gray-400 m-2" />
                  <input
                    type="phone number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="bg-gray-100 outline-none flex-1"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  ></input>
                </div>
                <div className="bg-gray-100 rounded-2xl  w-64 p-2 flex items-center mb-2">
                  <MdVpnKey className="text-gray-400 m-2" />
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-100 outline-none flex-1"
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash className="text-gray-400 m-2" />
                    ) : (
                      <FaEye className="text-gray-400 m-2" />
                    )}
                  </div>
                </div>
                <div>
                  <button className="text-pink-500 m-2 hover:shadow-black hover:cursor-pointer">
                    forgot password?
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="border-2 border-pink-500 rounded-full px-12 py-2 text-pink-500 inline-block font-semibold hover:bg-pink-500 hover:text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-pink-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
          <h2 className="text-3xl font-bold mb-2 ">Hello, Friends</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with ur partner
          </p>

          <Link
            href="../signup/page.tsx"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
