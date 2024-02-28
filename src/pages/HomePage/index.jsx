import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'
import HomeSellers from '../../components/sellers/homeSellers'
import Footer from '../../components/footer/index'
import "../../css/aliceCarousel.css"

function HomePage() {
  return (
    <>
      <Header />
      <main className='container px-[3rem] mb-[60px]'>
        <div>
          <Carousel />
          <HomeSellers title={"Best Sellers"} bookName={"Dune"} bookAuthor={"Deneme"} price={"87.5$"}/>
          <HomeSellers title={"Classics"} bookName={"Dune"} bookAuthor={"Deneme"} price={"87.5$"}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage