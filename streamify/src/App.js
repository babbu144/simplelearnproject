// src/App.js
import React, { useState } from 'react';
import MovieService from './services/MovieService';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const data = await MovieService.getMovies({ query });
      if (data.length === 0) {
        setError('No movies found matching your search.');
      } else {
        setMovies(data);
      }
    } catch (err) {
      setError('An error occurred while fetching movies. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = (query) => {
    fetchMovies(query);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && hasSearched && movies.length > 0 && <MovieList movies={movies} />}
      {!loading && !error && !hasSearched && <p></p> }
    </div>
  );
};

export default App;
