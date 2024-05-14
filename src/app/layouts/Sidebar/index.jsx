"use client";
import Image from "next/image";
import { PlusSquareOutlined , CloseOutlined } from '@ant-design/icons';
import React, { useEffect , StrictMode  } from 'react';
import { userAppSelector } from "../../../redux/store"
import { useDispatch } from 'react-redux';
import { getUsers, fetchDataThunk } from '../../../redux/dispatchServices/fetchDataThunk'
import { selectContact , openMenu } from '../../../redux/features/chat-slice';
import ModalComponent from './modal';

export default function Sidebar() {

  const dispatch = useDispatch();
  const users = userAppSelector((state) => state.messageReducer.users);
  const isMenu = userAppSelector((state) => state.messageReducer.openMenu);

  useEffect(() => {
    dispatch(getUsers()); // Dispatch the getUsers action when the component mounts
  }, [dispatch]);


  function selectUser(item) {
    dispatch(selectContact({contact_name: item.username ,...item}));
    dispatch(fetchDataThunk({conversation_id: item.conversation_id}));
  }

  return (
    <section>
      <div className={ isMenu ?
        "fixed bg-gray-800 text-white h-screen w-2/4 lg:w-1/6 z-10 lg:z-0" :
        "hidden lg:fixed bg-gray-800 text-white h-screen w-2/4 lg:w-1/6 z-10 lg:z-0"
        }>
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="flex justify-center">
            { isMenu ?
              <div className={"relative lg:hidden"} onClick={() => dispatch(openMenu(false))}>
          <CloseOutlined />
            </div>
            : null
          }
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
          <ModalComponent/>
        </div>
        <hr className="border-gray-700" />
        <div className="mt-4 pl-4">
          <h3 className="flex align-center items-center gap-2 content-center text-sm font-light mb-2"> People</h3>
          <div className="flex flex-col space-y-2">

            {users.map((item, index) => (
              item.user_id != localStorage.getItem("user_id") ? 
                <button className="flex items-center space-x-2" onClick={() => selectUser(item)} key={index}>
                <div
                className="rounded-md w-8 h-8 text-white items-center bg-red flex justify-center bold text-xl"
                style={{ backgroundColor: item.profile_pic}}
                >
                {item.username[0].toUpperCase()}
                </div>
                <span className="font-light">{item.username}</span>
                </button>
                : null
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
