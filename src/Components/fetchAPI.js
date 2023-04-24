import axios from "axios";

export async function fetchUsers() {
  try {
    const users = await axios.get(
      "https://6444d1ac914c816083c04ec3.mockapi.io/users/users"
    );
    return users.data;
  } catch (error) {
    throw error;
  }
}
