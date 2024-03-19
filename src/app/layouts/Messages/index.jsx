"use client";
import React, { useEffect } from 'react';
import Message from "../../../components/Message";
import { userAppSelector } from "../../../redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesThunk, selectMessages } from './../../../redux/fetchMessagesThunk'

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessagesThunk()); // Dispatch the fetchMessagesThunk action when the component mounts
  }, [dispatch]);

  const messages = userAppSelector((state) => state.messageReducer.messages);

  return (
    <div className="float-right float-right md:w-5/6 text-black px-5 pt-16 h-5/6 overflow-y-auto mt-10">
      {messages.map((item) => (
        <Message message={item} key={item.id_message}/>
      ))}
      <div>
      </div>
    </div>
  );
};

export default Messages;
