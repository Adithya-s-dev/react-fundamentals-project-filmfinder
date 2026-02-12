import '../css/Favorites.css'
import { useFavorites } from '../contexts/FavoritesContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const { favoriteMovies } = useFavorites();

  if (favoriteMovies.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-list">
      <h2>Your Favourite list of movies goes here</h2>
      <p>What are you waiting for? Start adding your favorite movies!</p>
    </div>
  )
}

export default Favorites
