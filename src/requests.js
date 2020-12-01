const API_KEY = '97eba8f47b19a6bd3deeef496c427116';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/trending/all/week?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/trending/all/week?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/trending/all/week?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/trending/all/week?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/trending/all/week?api_key=${API_KEY}&with_genres=10770`
};