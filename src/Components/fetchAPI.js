import axios from "axios";
axios.defaults.baseURL = "https://6444d1ac914c816083c04ec3.mockapi.io/";

export async function fetchUsers(page, per_page, value) {
  try {
    if (page && per_page) {
      return await axios
        .get(`users/?page=${page}&limit=${per_page}&followed=${value}`)
        .then(({ data }) => {
          return data;
        });
    }
  } catch (error) {
    throw error;
  }
}

export const updateUserData = async (id, body) => {
  try {
    await axios.put(`users/${id}`, { ...body }).then(({ data }) => {
      return data;
    });
  } catch (err) {
    console.log(err);
  }
};
