import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = {
  messageText: string;
  username: string;
  time: number;
  profile_pic: any;
};

type User = {
  fullname: string;
  username: string;
  password: string;
  token?: string;
  user_id: string;
};

type ContactUser = {
  contact_id?: string;
  conversation_id?: string;
  contact_name?: string;
};

type InitialState = {
  messages: Message[];
  user: User;
  contact: ContactUser;
  openMenu: boolean;
  users: User[];
  newUsers: User[];
};

const initialState: InitialState = {
  messages: [],
  openMenu: false,
  user: {
    fullname: null,
    username: null,
    password: null,
    token: null,
    user_id: null
  },
  contact: {
    contact_name: null,
    contact_id: null,
    conversation_id: null,
  },
  users: [],
  newUsers: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    submitMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push({...action.payload, time: Date.now()});
      return state
    },
    addMembers: (state, action: PayloadAction<any>) => {
      // state.users.push(action.payload);
      return state
    },
    saveFetchedMessages: (state, action) => {
      // Update state with fetched messages
      state.messages = action.payload;
    },
    saveUsers: (state, action) => {
      // Update state with fetched users
      state.users = action.payload;
    },
    saveNewUsers: (state, action) => {
      // Update state with fetched users
      state.newUsers = action.payload;
    },
    deleteUserData : (state, action) => {
      state.user = null;
    },
    saveUser: (state, action) => {
      // Update state with fetched user
      state.user = action.payload;
    },
    selectContact: (state, action) => {
      // Update state with fetched user
      state.contact = action.payload;
    },
    openMenu: (state, action) => {
      // Update state open menu
      state.openMenu = action.payload;
    }
  },
});
export const { saveFetchedMessages , saveUser , saveUsers , selectContact , saveNewUsers , deleteUserData , openMenu} = messageSlice.actions;
export const { submitMessage } = messageSlice.actions;
export default messageSlice.reducer;
