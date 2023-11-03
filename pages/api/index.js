import axios from "axios";
import { getCategoryByIdByType } from "../../utils/categoryId";

export const getPlacesData = async (type, color, size) => {
  try {
    // Define the API endpoint URL
    const apiUrl = "https://sokofiti-admin.vercel.app/api/products";

    // Define the request parameters
    const params = {};
    if (type) {
      const categoryId = await getCategoryByIdByType(type);
      params.categoryId = categoryId;
    }
    if (color) {
      params.color = color;
    }
    if (size) {
      params.category = size;
    }

    const response = await axios.get(apiUrl, {
      params,
    });

    // console.log("[getPlacesData] Response:", response);
    return response.data;
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error;
  }
};

//farmers
export const getFarmersData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://sokofiti-admin.vercel.app/api/stores`,
      {
        params: {
          swLat: sw.lat,
          swLng: sw.lng,
          neLat: ne.lat,
          neLng: ne.lng,
        },
        headers: {},
      }
    );
    // console.log("[getPlace]", response.data);
    return response.data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};

//category
export const getCategory = async () => {
  try {
    const response = await axios.get(
      `https://sokofiti-admin.vercel.app/api/categories`,
      {
        headers: {},
      }
    );
    // console.log("[getCategory]", response.data);
    return response.data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
