"use client";
import { UserOutlined, MailOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { userAppSelector } from "../../redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/dispatchServices/fetchDataThunk';
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Signin = () => {

  const dispatch = useDispatch();
  const router = useRouter()

  const loginUser = (formData) => {
    dispatch(login(
      formData.get("password"),
      formData.get("email"),
    )); // Dispatch the register action

  };

  const users = userAppSelector((state) => state?.messageReducer?.user);
  useEffect(() => {    
    if(users?.token)
      router.push('/chat')
    else localStorage.clear();
    return
  });

  return (
    <>
      <div className="h-screen md:flex">
          <img
          className="object-cover w-1/2"
              src="/img/firewatch-4k-wallpapers.jpg"
            />
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form action={loginUser} className="bg-white w-2/5">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome!</h1>
            <br></br>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <MailOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <LockOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="password" name="password" placeholder="Password" />
            </div>
            <div className='flex flex-col'>
              <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
              <Link className="text-black ml-2 hover:text-blue-500 cursor-pointer" href={"/auth/signup"}>
              Sign Up
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
