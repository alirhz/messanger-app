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
};

type InitialState = {
  messages: Message[];
  user: User;
};

const initialState: InitialState = {
  messages: [],
  user: {
    fullname: null,
    username: null,
    password: null,
    token: null
  }
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
    saveUser: (state, action) => {
      // Update state with fetched user
      state.user = action.payload;
    },
  },
});
export const { saveFetchedMessages , saveUser } = messageSlice.actions;
export const { submitMessage } = messageSlice.actions;
export default messageSlice.reducer;
