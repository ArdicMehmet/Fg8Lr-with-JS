import React from 'react'
import Header from '../../components/header'
import CardDetail from '../../components/cards/cardDetail'
import PageInfo from '../../components/pageInfo'
import HeartBtn from '../../images/icons/Heart.png'

import ScrollToTop from '../../components/scroll'

import { useNavigate, useParams } from 'react-router-dom'

export default function BookDetails() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <PageInfo categoryName={"Book Details"} />
      <main className='container flex px-[3rem] font-manrope'>
        <div className="w-1/4">
          <CardDetail />
        </div>
        <div className="w-3/4 ps-20">
          <div className='flex justify-between'>
            <h1 className='text-[32px] md:text-3xl sm:text[28px] font-semibold pb-2.5'>Dune</h1>
            <img src={HeartBtn} className='cursor-pointer' alt="Heart" />
          </div>

          <h3 className='text-2xl md:text-[22px] sm:text-xl text-gray-900_99 font-semibold pb-14'>John Stone</h3>
          <p className='text-justify font-light font-bold pt-2.5 text-gray-900_99'>
            Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.
          </p>
          <div className='w-[400px] h-[60px] bg-deep_orange flex justify-between items-center py-2.5 px-5 rounded text-xl text-white cursor-pointer ms-auto mt-48'>
            <span className='font-bold'>87.5$</span>
            <span className='font-semibold'>Buy Now</span>
          </div>
        </div>
      </main>
      <ScrollToTop/>
    </>
  )
}

