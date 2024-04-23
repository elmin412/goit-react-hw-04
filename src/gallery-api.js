import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGallery = async (searchQuery, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: "jYM0nvqWLJ2Klq8UG3tSrbS9QGqoWCvoZJIcNE3yQwc",
            query: searchQuery,
            per_page: 12,
            page: currentPage,
        }
    });
   return response.data.results;
};