import './css/App.css'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { FavoritesProvider } from './contexts/FavoritesContext'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <main className="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </FavoritesProvider>  
  )
}

export default App
