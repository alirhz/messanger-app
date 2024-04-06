// Import the mainAPI object
import mainAPI from "../../services/api";

// Function to fetch messages
const fetchUsers = async () => {
  try {
    // Call the getMessage method from the mainAPI object
    const response = await mainAPI.getUsers();
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching messages:", error);
    return null;
  }
};

export { fetchUsers };