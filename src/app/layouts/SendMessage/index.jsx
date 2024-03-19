"use client";
import { SendOutlined } from '@ant-design/icons';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { fetchMessages } from "./service";
import { useDispatch } from "react-redux"
import { submitMessage } from '../../../redux/features/message-slice'; // Import the action creator

const SendMessageComponent = () => {

  const [messageText, username, date] = useState("");


  const dispatch = useDispatch();

  const socket = io('http://localhost:3001'); // Replace with your server URL

  socket.on('connect', () => {
    console.log('Connected to Socket.IO server');
  });

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
      username: "josh",
      time: formattedDateTime
    }

    dispatch(submitMessage(sentMessageInfo));

    // // Event listener for when the connection is established

    // Send a message to the server
    socket.emit('message', sentMessageInfo);

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
            placeholder="Enter to Send.Shift L to Add new line"
            name="message"
          />
          <button type="submit" className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded">
            <p className="text-lime-50">
              Send
            </p>
            <SendOutlined className="text-lime-50" />
          </button>
        </form>
      </div>
    </footer>
  );
}

export default SendMessageComponent;