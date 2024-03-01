import React, { useEffect } from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'
import HomeSellers from '../../components/sellers/homeSellers'
import Footer from '../../components/footer/index'
import "../../css/aliceCarousel.css"
import ScrollToTop from '../../components/scroll'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCategories } from '../../redux/book/categorySlice'
import { fetchAllBooks } from '../../redux/book/bookSlice'
import { useLocation, useNavigate } from 'react-router-dom'


function HomePage() {
  
  const { getCategories } = useSelector(state => state.category);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    !user ? navigate('/login') : '';
  },[location])

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [location])

  useEffect(() => {
    getCategories.forEach(category => {
      dispatch(fetchAllBooks(category.id));
    })

  }, [getCategories])
  
  return (
    <>
      <Header />
      <main className='container px-[3rem] mb-[60px]'>
        <div>
          <Carousel />
          {
            getCategories ?
              getCategories.map((category, i) =>
                <HomeSellers key={i} title={category.name} titleId={category.id} categoryId={category.id}
                />)
              :
              ''
          }
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default HomePage