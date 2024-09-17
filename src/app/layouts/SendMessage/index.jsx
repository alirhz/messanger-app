"use client";
import { SendOutlined } from '@ant-design/icons';
import React, { useState, useEffect , useRef } from 'react';
import { userAppSelector } from "../../../redux/store"
import { useDispatch } from "react-redux"
import { submitMessage } from '../../../redux/features/chat-slice'; // Import the action creator
import websocketService from "../../services/socket";
import { retrieveUserInfo } from '../../../redux/dispatchServices/fetchDataThunk'

const SendMessageComponent = () => {

  const [messageValue, setMessageValue] = useState('');
  const user = userAppSelector((state) => state?.messageReducer?.user);
  const contact = userAppSelector((state) => state.messageReducer?.contact);

  const dispatch = useDispatch();

  const contactRef = useRef(contact);

  useEffect(() => {
    contactRef.current = contact;
  }, [contact]);
  
  useEffect(() => {
    if(!user.user_id)
    dispatch(retrieveUserInfo());
    websocketService.connect();
    websocketService.subscribe(receieveWebSocketData);
    return () => {
      websocketService.unsubscribe(receieveWebSocketData);
      websocketService.disconnect();
    };
  }, []);

  const handleChange = (event) => {
    // Update the messageValue state with the new value from the input
    setMessageValue(event.target.value);
  };

  const receieveWebSocketData = (msg) => {
    // Event listener for when a message is received from the server
      if(contactRef.current.conversation_id == msg.conversation_id) {
        dispatch(submitMessage(msg));
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight)
        }, 0);
      }
  }

  const sendMessage = (formData) => {
    const message = formData.get("message");

    let sentMessageInfo;

    sentMessageInfo = {
      message_text: message,
      username: user.username,
      user_id: user.user_id,
      conversation_id: contact.conversation_id,
      profile_pic: user.profile_pic
    }

    // Event listener for when the connection is established
    websocketService.sendMessage(sentMessageInfo);
    setMessageValue("");
  };

  return (
    <footer>
      <div className={"text-black bg-white float-right w-full lg:w-5/6 px-0 lg:px-8"}>
      { contact.conversation_id ?
        <form action={sendMessage} className="flex justify-between space-between bg-white border border-gray-400 items-center shadow-sm rounded-md px-2 py-2 mb-2 mx-6">
          <input
            className="focus:outline-none bg-white w-11/12"
            type="text"
            value={messageValue == null ? '' : messageValue}
            placeholder="Enter to Send.Shift L to Add new line"
            name="message"
            onChange={handleChange}
          />
          <button type="submit" className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded">
            <p className="text-lime-50">
              Send
            </p>
            <SendOutlined className="text-lime-50" />
          </button>
        </form>
        : null
        }
      </div>
    </footer>
  );
}

export default SendMessageComponent;