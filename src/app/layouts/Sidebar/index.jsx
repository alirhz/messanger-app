"use client";
import Image from "next/image";
import { PlusSquareOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { userAppSelector } from "../../../redux/store"
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../redux/dispatchServices/fetchDataThunk'

export default function Sidebar() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()); // Dispatch the getUsers action when the component mounts
  }, [dispatch]);

  const users = userAppSelector((state) => state.messageReducer.users);

  function selectUser(userId) {
    console.log(userId)
  }

  return (
    <section>
      <div className="fixed bg-gray-800 text-white h-screen w-1/6">
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="flex justify-center">
            <Image
              src="/icons8-bebo-144.svg"
              alt="Vercel Logo"
              width={100}
              height={80}
              priority
            />
          </div>
          <div className="text-xl font-bold">Issue Chat</div>
          <a className="text-gray-300 hover:text-white underline">Edit Settings</a>
        </div>
        <hr className="border-gray-700" />
        <div className="mt-4 pl-4">
          <h3 className="flex align-center items-center gap-2 content-center text-sm font-light mb-2"> People</h3>
          <div className="flex flex-col space-y-2">

            {users.map((item, index) => (
              <button className="flex items-center space-x-2" onClick={() => selectUser(item.user_id)} key={index}>
                <div
                  className="rounded-md w-8 h-8 text-white items-center bg-red flex justify-center bold text-xl"
                  style={{ backgroundColor: item.profile_pic}}
                >
                  {item.username[0].toUpperCase()}
                </div>
                <span className="font-light">{item.username}</span>
              </button>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
