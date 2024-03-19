import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Message = {
  messageText: string;
  username: string;
  date: string;
};

type InitialState = {
  messages: Message[];
};

const initialState: InitialState = {
  messages: [],
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
  },
});
export const { saveFetchedMessages } = messageSlice.actions;
export const { submitMessage } = messageSlice.actions;
export default messageSlice.reducer;
