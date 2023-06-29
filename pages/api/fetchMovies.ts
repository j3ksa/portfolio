import axios from 'axios'


export const fetchMovies = async (searchTerm: string) => {
  const url = 'http://www.omdbapi.com/'
  const omdbApiKey = process.env.OMDB_API_KEY
  const params = {
    apikey: omdbApiKey,
    s: searchTerm
  }
  const response = await axios.get(url, { params })
  return response.data
}