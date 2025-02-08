import MovieCard from '../components/moviecard';
import { useState, useEffect, use } from 'react';
import './Home.css';
import { searchMovies, getPopularMovies } from '../../services/api';

function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {}, []); //runs once when the component mounts & checks if array changes to run again
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); //prevents the page from refreshing & clearing search bar
    alert(`Searching for ${search}`);
    setSearch(''); //clears the search bar after alert
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          value={search} //sets to value to search
          onChange={(e) => setSearch(e.target.value)} //updates the search value as the user types
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) => (
            // movie.title.toLowerCase().includes(search.toLowerCase()) && ( only displays movies that match the first part of the search
            <MovieCard movie={movie} key={movie.id} />
          ) //maps thru movies and displays them
        )}
      </div>
    </div>
  );
}

export default Home;
