import { fetchMessages } from '../../app/layouts/SendMessage/service';
import { fetchUsers , fetchNewUsers } from './../../app/layouts/Sidebar/service';
import { loginUser , registerUser } from '../../components/Auth/service';
import { saveFetchedMessages, saveNewUsers, saveUser, saveUsers } from '../features/chat-slice';
import { userAppSelector } from '../store';

export const fetchDataThunk = (contactId) => async (dispatch) => {
  try {
    const data = await fetchMessages(contactId);
    if (data) 
      dispatch(saveFetchedMessages(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching messages:", error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const data = await fetchUsers();
    if (data) 
      dispatch(saveUsers(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching users:", error);
  }
};

export const getNewUsers = () => async (dispatch) => {
  try {
    const data = await fetchNewUsers();
    if (data) 
      dispatch(saveNewUsers(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching users:", error);
  }
};

export const login = (email: string, password: string) => async (dispatch) => {
  try {
    const data = await loginUser(email, password);
    if (data)  {
      const { token, user_id, username, profile_pic} = data;
      localStorage.setItem('token', token)
      localStorage.setItem('user_id', user_id)
      localStorage.setItem('username', username)
      localStorage.setItem('profile_pic', profile_pic)
      dispatch(saveUser(data));
    }
  } catch (error) {
    // Handle error
    console.error("Error in login:", error);
  }
};

export const register = (fullname: string,username: string, email: string, password: string) => async (dispatch) => {
  try {
    const data = await registerUser(fullname, username, email, password);
    if (data) 
      dispatch(saveUser(data));
  } catch (error) {
    // Handle error
    console.error("Error in register:", error);
  }
};