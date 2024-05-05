"use client";
import { SendOutlined } from '@ant-design/icons';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { userAppSelector } from "../../../redux/store"
import { useDispatch } from "react-redux"
import { submitMessage } from '../../../redux/features/chat-slice'; // Import the action creator
import {socket} from "../../services/socket";

const SendMessageComponent = () => {

  const [messageValue, setMessageValue] = useState('');
  const user = userAppSelector((state) => state?.messageReducer?.user);
  const contact = userAppSelector((state) => state.messageReducer?.contact);

  const dispatch = useDispatch();
  
  useEffect(() => {
    socket.emit('connected', localStorage.getItem("user_id"));
  });


  const handleChange = (event) => {
    // Update the messageValue state with the new value from the input
    setMessageValue(event.target.value);
  };
  const sendMessage = (formData) => {
    const message = formData.get("message");

    // Get current date and time
    const currentDate = new Date();

    // Get year, month, day, hour, minute, and second
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');

    // Format datetime string
    const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    const sentMessageInfo = {
      message_text: message,
      username: user.username,
      time: formattedDateTime,
      user_id: user.user_id,
      conversation_id: contact.conversation_id
    }

    dispatch(submitMessage({...sentMessageInfo, profile_pic: user.profile_pic}));

    // // Event listener for when the connection is established

    // Send a message to the server
    console.log("sentMessageInfo",sentMessageInfo)
    socket.emit('message', sentMessageInfo);

    setMessageValue("");

    // Event listener for when a message is received from the server
    socket.on('message', (data) => {
      console.log('Received from server:', data);
    });

    // Event listener for when the connection is closed
    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });
  };

  return (
    <footer>
      <div className="text-black bg-white w-full md:w-5/6 float-right px-8">
        <form action={sendMessage} className="flex justify-between space-between bg-white border border-gray-400 items-center shadow-sm rounded-md px-2 py-2 mb-2 mx-6">
          <input
            className="focus:outline-none bg-white w-11/12"
            type="text"
            value={messageValue == null ? '' : messageValue}
            placeholder="Enter to Send.Shift L to Add new line"
            name="message"
            onChange={handleChange}
          />
          {contact.conversation_id ? 
          <button type="submit" className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded">
            <p className="text-lime-50">
              Send
            </p>
            <SendOutlined className="text-lime-50" />
          </button>
          : 
          <button type="submit" className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded opacity-50 cursor-not-allowed">
            <p className="text-lime-50">
              Send
            </p>
            <SendOutlined className="text-lime-50" />
          </button>
          }
        </form>
      </div>
    </footer>
  );
}

export default SendMessageComponent;