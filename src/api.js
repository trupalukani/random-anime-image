import axios from "axios";

const nekoData = async (neko) => {
  try {
    const response = await axios.get(`https://api.catboys.com/${neko}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching API:", error);
    return "Please enter valid term..."
  }
};

export default nekoData;
