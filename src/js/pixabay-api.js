import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export async function requestData(query, page = 1, perPage = 15) {
  try {
    const params = {
      key: "49503501-671f9af9932bd9ea1fe97a1a7",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      page: page,
      per_page: perPage,
    };
    const response = await axios.get("/", { params });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
