"use client";
import React, { useEffect } from 'react';
import Message from "../../../components/Message";
import { userAppSelector } from "../../../redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk, selectMessages } from '../../../redux/dispatchServices/fetchDataThunk'

const Messages = () => {
  const dispatch = useDispatch();

  const contact = userAppSelector((state) => state.messageReducer?.contact);
  const messages = userAppSelector((state) => state.messageReducer.messages);

  useEffect(() => {
    dispatch(fetchDataThunk(contact)); // Dispatch the fetchDataThunk action when the component mounts
  }, [dispatch]);


  return (
    <div className="float-right float-right md:w-5/6 text-black px-5 overflow-y-auto mb-8 py-24">
      {messages.map((item,index) => (
        <Message message={item} key={index}/>
      ))}
      <div>
      </div>
    </div>
  );
};

export default Messages;
