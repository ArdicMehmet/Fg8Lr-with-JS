import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import("./pages/HomePage/index"));
const RegisterAndLoginPage = React.lazy(() => import("./pages/RegisterLoginPage/index"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage/index"));
const BookDetailsPage = React.lazy(() => import("./pages/BookDetailsPage/index"));



function ProjectRoutes() {
    return (
        <>
            <React.Suspense fallback={<>Loading...</>}>
                <Router>
                    <Routes>
                        <Route path='/' element={<RegisterAndLoginPage />} />
                        <Route path='/register' element={<RegisterAndLoginPage />} />
                        <Route path='/login' element={<RegisterAndLoginPage />} />
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/category/:id' element={<CategoryPage />} />
                        <Route path='/book-details/:id' element={<BookDetailsPage />} />
                        {/* <Route path='/*' element={} /> */}
                    </Routes>
                </Router>
            </React.Suspense>
        </>
    )
}

export default ProjectRoutes