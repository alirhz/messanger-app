// Import the mainAPI object
import mainAPI from "../../services/api";

// Function to fetch messages
const fetchMessages = async (contact) => {
  try {
    // Call the getMessage method from the mainAPI object
    if(!contact.conversation_id) throw "select a contact";
    const response = await mainAPI.getMessage(contact.conversation_id);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching messages:", error);
    return null;
  }
};

export { fetchMessages };
