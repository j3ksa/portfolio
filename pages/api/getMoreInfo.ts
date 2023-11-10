import axios from "axios";

export const getMoreInfo = async (imdbID: string) => {
  const url = "http://www.omdbapi.com/";
  const omdbApiKey = process.env.OMDB_API_KEY;
  const params = {
    apikey: omdbApiKey,
    i: imdbID,
  };
  const response = await axios.get(url, { params });
  return response.data;
};
