// app/api.ts
import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
