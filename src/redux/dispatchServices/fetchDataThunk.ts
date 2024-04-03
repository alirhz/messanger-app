import { fetchMessages } from '../../app/layouts/SendMessage/service';
import { loginUser , registerUser } from '../../components/Auth/service';
import { saveFetchedMessages, saveUser } from '../features/chat-slice';

export const fetchDataThunk = () => async (dispatch) => {
  try {
    const data = await fetchMessages();
    if (data) 
      dispatch(saveFetchedMessages(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching messages:", error);
  }
};

export const login = (email: string, password: string) => async (dispatch) => {
  try {
    const data = await loginUser(email, password);
    if (data)  {
      const { token, user_id, username} = data;
      localStorage.setItem('token', token)
      localStorage.setItem('user_id', user_id)
      localStorage.setItem('username', username)
      dispatch(saveUser(data));
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching messages:", error);
  }
};

export const register = (fullname: string,username: string, email: string, password: string) => async (dispatch) => {
  try {
    const data = await registerUser(fullname, username, email, password);
    if (data) 
      dispatch(saveUser(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching messages:", error);
  }
};