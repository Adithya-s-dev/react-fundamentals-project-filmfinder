import { useEffect, useState } from 'react'
import '../css/Home.css'
import MovieCard from '../components/MovieCard'
import { searchMovies, getTrendingMovies } from '../services/api'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getTrendingMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const onFormSubmit = async(e) => {
    e.preventDefault()
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)
    try {
      const searchMoviesQuery = await searchMovies(searchQuery)
      setMovies(searchMoviesQuery)
      setError(null)
    }catch {
      setError('Failed to search movies. Please try again later.')
    }
    finally {
      setLoading(false)
    }
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
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      )}
    </div>
  )
}

export default Home
