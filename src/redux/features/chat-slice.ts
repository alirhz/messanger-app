import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = {
  messageText: string;
  username: string;
  date: string;
};

type User = {
  fullname: string;
  username: string;
  password: string;
  token?: string;
  user_id: string;
};

type InitialState = {
  messages: Message[];
  user: User;
  users: User[];
};

const initialState: InitialState = {
  messages: [],
  user: {
    fullname: null,
    username: null,
    password: null,
    token: null,
    user_id: null
  },
  users: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    submitMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
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
    saveUser: (state, action) => {
      // Update state with fetched user
      state.user = action.payload;
    },
  },
});
export const { saveFetchedMessages , saveUser , saveUsers } = messageSlice.actions;
export const { submitMessage } = messageSlice.actions;
export default messageSlice.reducer;
