import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
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
    console.log("[getPlace]", response.data);
    return response.data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
