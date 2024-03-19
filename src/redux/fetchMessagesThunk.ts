import { fetchMessages } from '../app/layouts/SendMessage/service';
import { saveFetchedMessages } from './features/message-slice';

export const fetchMessagesThunk = () => async (dispatch) => {
  try {
    const data = await fetchMessages();
    if (data) 
      dispatch(saveFetchedMessages(data));
  } catch (error) {
    // Handle error
    console.error("Error fetching messages:", error);
  }
};