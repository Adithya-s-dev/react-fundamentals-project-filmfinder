import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({children}) => {        // provides state to any of the components that are wrapped around it.

    const [favoriteMovies, setFavoriteMovies] = useState([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMovies');

        if(storedFavorites) setFavoriteMovies(JSON.parse(storedFavorites))
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
    }, [favoriteMovies]);

    const addToFavorites = (movie) => {
        setFavoriteMovies((prev) => [...prev, movie])
    }

    const removeFavorites = (movieId) => {
        setFavoriteMovies((prev) => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favoriteMovies.some(movie => movie.id === movieId)
    }

    const value = {
        favoriteMovies,
        addToFavorites,
        removeFavorites,
        isFavorite
    }




  return (
    <FavoritesContext.Provider  value = {value}>
        {children}
    </FavoritesContext.Provider>
  )
}

