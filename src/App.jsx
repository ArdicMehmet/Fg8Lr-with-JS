import './App.css'
import './css/font.css'

import RegisterAndLoginPage from "./pages/RegisterLoginPage/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import CategoryPage from "./pages/CategoryPage/index.jsx";
import BookDetailsPage from "./pages/BookDetailsPage/index.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RegisterAndLoginPage/>} />
          <Route path='/register' element={<RegisterAndLoginPage/>} />
          <Route path='/login' element={<RegisterAndLoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/category/:id' element={<CategoryPage/>} />
          <Route path='/book-details/:id' element={<BookDetailsPage/>} />
          {/* <Route path='/*' element={} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
