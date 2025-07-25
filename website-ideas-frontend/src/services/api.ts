import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Adjust the URL as needed

export const submitWebsiteIdea = async (idea: string) => {
  try {
    const response = await axios.post(`${API_URL}/websites`, { idea });
    return response.data;
  } catch (error) {
    throw new Error('Error submitting website idea: ' + (error as Error).message);
  }
};

export const fetchSections = async () => {
  try {
    const response = await axios.get(`${API_URL}/websites`);
    const websites = response.data.data;
    if (Array.isArray(websites) && websites.length > 0) {
      // Sort by createdAt descending to get the latest website
      const sorted = [...websites].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return sorted[0].sections;
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching sections: ' + error.message);
    }
    throw error;
  }
};