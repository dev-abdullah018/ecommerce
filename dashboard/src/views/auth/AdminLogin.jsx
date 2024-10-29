import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/reducers/authReducer";
import ClockLoader from "react-spinners/ClockLoader";
import toast from 'react-hot-toast';

const AdminLogin = () => {
  let dispatch = useDispatch();
  const { loader, errorMessage } = useSelector((state) => state.auth);

  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(admin_login(data));
  };

  useEffect(()=>{
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(clearMessage)
    }
  },[])

  return (
    <div className="min-w-fit min-h-screen bg-[#A435F0] flex justify-center items-center">
      <div className="w-[350px] p-2">
        <div className=" bg-[#fff] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px] flex justify-center items-center">
              <img src="/Ocommerce.png " alt="" />
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
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
            <button
              disabled={loader ? true : false}
              className="bg-[#A435F0] w-full hover:bg-[#ae4eed] text-white rounded-md px-7 py-2 mb-3 disabled:bg-[#EBEBE4]"
            >
              {loader ? <ClockLoader size={20} color="#c5afaf" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
