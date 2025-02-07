import MovieCard from '../components/moviecard';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState('');

  const movies = [
    {
      id: 1,
      title: 'The Godfather',
      release_date: 'March 24, 1972',
      url: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      release_date: 'September 23, 1994',
      url: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      release_date: 'July 18, 2008',
      url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
    },
    {
      id: 4,
      title: 'Forrest Gump',
      release_date: 'July 6, 1994',
      url: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); //prevents the page from refreshing & clearing search bar
    alert(`Searching for ${search}`);
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
          (
            movie //maps thru movies and displays them
          ) => (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
}

export default Home;
