"use client";
import { UserOutlined, MailOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { userAppSelector } from "../../redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/dispatchServices/fetchDataThunk';
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Signin = () => {

  const dispatch = useDispatch();
  const router = useRouter()

  const registerUser = (formData) => {

    dispatch(register(
      formData.get("fullname"),
      formData.get("username"),
      formData.get("email"),
      formData.get("password")
    )); // Dispatch the login action

  };

  const users = userAppSelector((state) => state.messageReducer.user);
  useEffect(() => {
    
    // if(users.username)  {
    //   router.push('/auth/signin')
    //   return;
    // }
  });


  return (
    <>
      <div className="h-screen md:flex">
          <img
          className="object-cover w-1/2"
              src="/img/firewatch-4k-wallpapers.jpg"
            />
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form action={registerUser} className="bg-white w-2/5">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <br></br>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <UserOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="text" name="fullname" placeholder="Full name" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <ExclamationCircleOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="text" name="username" placeholder="Username" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <MailOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <LockOutlined className="text-slate-500"/>
              <input className="pl-2 outline-none border-none text-black" type="password" name="password" placeholder="Password" />
            </div>
            <div className='flex flex-col'>
            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
            <Link className="text-black ml-2 hover:text-blue-500 cursor-pointer" href={"/auth/signin"}>
              Sign In
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
