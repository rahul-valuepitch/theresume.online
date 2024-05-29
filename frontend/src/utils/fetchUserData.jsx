import axios from "axios";
import Cookies from "js-cookie";

export const fetchUserData = async () => {
  const accessToken = Cookies.get();

  console.log(`Access Token ::`, accessToken);

  if (!accessToken) {
    console.log("No access token found");
    return null;
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    console.log("Response:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
