import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import RestaurantsPage from './pages/RestaurantsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menus' element={<MenuPage />} />
        <Route path='/restaurants' element={<RestaurantsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
