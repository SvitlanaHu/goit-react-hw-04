import axios from "axios";
import { ACCESSKEY } from './unsplashApiKey';


export const fetchPictures = async (query, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query,
            page,
            per_page: 30,
            client_id: ACCESSKEY,
        },
    });
    console.log(response.data);
    return response.data;
};
