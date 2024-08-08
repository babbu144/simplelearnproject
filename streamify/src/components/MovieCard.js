// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieCard;
