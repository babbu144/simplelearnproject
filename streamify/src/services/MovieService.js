// src/services/MovieService.js
import movies from './mockMovies';

const getMovies = async (params) => {
  const { query } = params;

  // Filter movies based on the query
  let filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase()) ||
      movie.rating.toString().includes(query)
    );
  });

  // Prioritize exact matches for the query
  filteredMovies = filteredMovies.sort((a, b) => {
    if (a.title.toLowerCase() === query.toLowerCase()) return -1;
    if (b.title.toLowerCase() === query.toLowerCase()) return 1;
    return 0;
  });

  // Simulate a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredMovies);
    }, 1000);
  });
};

export default {
  getMovies,
};
