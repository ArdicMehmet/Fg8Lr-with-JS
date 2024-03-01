import React, { useEffect } from 'react'
import Header from "../../components/header"
import PageInfo from "../../components/pageInfo"
import Footer from "../../components/footer"
import CategorySellers from "../../components/sellers/categorySellers"
import ScrollToTop from '../../components/scroll'
import { useParams } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { user } = useSelector(state => state.user);

  useEffect(()=>{
    (user || (localStorage.getItem("auth"))) ? "" : navigate('/login');
  },[location])

  return (
    <>
      <Header />
      <PageInfo categoryName={params.categoryName} />
      <main className='general-container'>
        <CategorySellers />
      </main>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default CategoryPage