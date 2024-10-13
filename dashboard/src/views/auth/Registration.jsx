import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Registration = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  
  };

  let handleFormSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
    
  }

  return (
    <div className="min-w-fit min-h-screen bg-[#A435F0] flex justify-center items-center">
      <div className="w-[350px] p-2">
        <div className=" bg-[#fff] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Web Academy</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>

          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                onChange={handleInputChange}
                className="px-3 py-2 outline-none border border-slate-200 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                onChange={handleInputChange}
                className="px-3 py-2 outline-none border border-slate-200 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                onChange={handleInputChange}
                className="px-3 py-2 outline-none border border-slate-200 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 rounded border border-slate-200 focus:ring-blue-500"
              />
              <label htmlFor="checkbox" className="text-sm">
                I agree to privacy policy & terms
              </label>
            </div>

            <button className="bg-[#A435F0] w-full hover:bg-[#ae4eed] text-white rounded-md px-7 py-2 mb-3">
              Sign Up
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p className="text-sm">
                Already Have an Account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </form>

          <div className="w-full flex justify-center items-center mb-3">
            <div className="w-[45%] bg-slate-200 h-[1px]"></div>
            <div className="w-[10%] flex justify-center items-center">
              <span className="pb-1">Or</span>
            </div>
            <div className="w-[45%] bg-slate-200 h-[1px]"></div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="w-[135px] h-[35px] flex rounded-md bg-red-500 hover:bg-red-400 cursor-pointer justify-center items-center overflow-hidden text-white">
              <span>
                <FaGoogle />
              </span>
            </div>
            <div className="w-[135px] h-[35px] flex rounded-md bg-blue-500 hover:bg-blue-400 cursor-pointer justify-center items-center overflow-hidden text-white">
              <span>
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
