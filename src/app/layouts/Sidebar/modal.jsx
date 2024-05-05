"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { getNewUsers , getUsers } from '../../../redux/dispatchServices/fetchDataThunk'
import { userAppSelector } from "../../../redux/store"
import { Checkbox } from 'antd';
import { addMembers } from "./service"

let selectedUsers= []

const ModalComponent = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getNewUsers()); // Dispatch the getUsers action when the component mounts
  }, [dispatch]);

  const users = userAppSelector((state) => state.messageReducer.newUsers);

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async (e) => {
    await addMembers(selectedUsers);
    dispatch(getUsers()); // Dispatch the getUsers action when the component mounts
    dispatch(getNewUsers()); // Dispatch the getUsers action when the component mounts
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const onChange = (item, checkedValues) => {
    if(checkedValues.target.checked) 
      return selectedUsers.push(item);
      selectedUsers.findIndex(index => index.user_id === item.user_id)
      return selectedUsers.splice(selectedUsers.findIndex(index => index.user_id === item.user_id), 1);
  };

  return (
    <>
      {/* <Button onClick={showModal}>Open Draggable Modal</Button> */}
      <a onClick={showModal} className="text-gray-300 hover:text-white underline cursor-pointer">Explore</a>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => { }}
            onBlur={() => { }}
          // end
          >
            Explore New Users
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <div className="flex my-5 gap-4 flex-wrap	">
          {users.map((item, index) => (
            <button className="flex items-center space-x-2" key={index}>
              <Checkbox key={item.user_id} onChange={onChange.bind(this, item)}
              className='flex justify-start flex-row mr-5 text-xl font-bold scale-105'
              >
              </Checkbox>
              <div
                className="rounded-md w-8 h-8 text-white items-center bg-red flex justify-center bold text-xl"
                style={{ backgroundColor: item.profile_pic }}
              >
                {item.username[0].toUpperCase()}
              </div>
              <span className="font-light">{item.username}</span>
            </button>
          ))}
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <Button className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded text-lime-50" onClick={handleOk}>Ok</Button>
            <Button className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded text-lime-50" onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalComponent;