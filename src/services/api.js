const API_KEY = "7ba3a50ea7f80fa7454fa3d34b2c8c0f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}