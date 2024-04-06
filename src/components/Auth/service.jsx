// Import the mainAPI object
import mainAPI from "../../app/services/api";

// Login User
const loginUser = async (email, password) => {
  try {
    const response = await mainAPI.signIn(email, password);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching messages:", error);
    return null;
  }
};

// Register User
const registerUser = async (fullname, username, email, password) => {
  try {
    let user = {
      fullname: fullname,
      username: username,
      password: password,
      email: email
  }
    const response = await mainAPI.signUp(user);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching messages:", error);
    return null;
  }
};

export { loginUser , registerUser };
