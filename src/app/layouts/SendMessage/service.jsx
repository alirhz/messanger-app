// Import the messageAPI object
import messageAPI from "../../services/api";

// Function to fetch messages
const fetchMessages = async () => {
  try {
    // Call the getMessage method from the messageAPI object
    const response = await messageAPI.getMessage();
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching messages:", error);
    return null;
  }
};

export { fetchMessages };
