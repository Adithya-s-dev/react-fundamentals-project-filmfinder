import { useState } from 'react'
import '../css/Home.css'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const movies = [
    {
      title: 'Inception',
      releaseDate: '2010',
    },
    {
      title: 'The Dark Knight',
      releaseDate: '2008',
    },
    {
      title: 'Interstellar',
      releaseDate: '2014',
    },
  ]
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`)
    setSearchQuery('')
  }
  return (
    <div className="home-page">
      <form className="search-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className='search-btn'>Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => ( movie.title.toLowerCase().startsWith(searchQuery) &&
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
