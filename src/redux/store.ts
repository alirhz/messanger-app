import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import messageReducer from "./features/chat-slice"
import {fetchDataThunk} from './dispatchServices/fetchDataThunk';

export const store = configureStore({
    reducer: {
        messageReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const userAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const allMessagesSelector: TypedUseSelectorHook<RootState> = useSelector;