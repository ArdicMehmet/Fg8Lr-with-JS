import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'
import HomeSellers from '../../components/sellers/homeSellers'
import Footer from '../../components/footer/index'
import "../../css/aliceCarousel.css"
import ScrollToTop from '../../components/scroll'
import { useSelector, useDispatch } from 'react-redux'

function HomePage() {
  const {categories} = useSelector(state => state.category);

  console.log("categories : ", categories);
  return (
    <>
      <Header />
      <main className='container px-[3rem] mb-[60px]'>
        <div>
          <Carousel />
          <HomeSellers title={"Best Sellers"} titleId={1} bookId={1} bookName={"Dune"} bookAuthor={"Deneme"} price={"87.5$"}/>
          <HomeSellers title={"Classics"}  titleId={2} bookId={2} bookName={"Dune2"} bookAuthor={"Deneme"} price={"87.5$"}/>
        </div>
      </main>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default HomePage