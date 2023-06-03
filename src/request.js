const APIKEY = "3e79ed85ffcacd8f3dbe6a8f36226d59";

const request = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};


export default request;