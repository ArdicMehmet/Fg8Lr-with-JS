import Header from "../../components/header"
import PageInfo from "../../components/pageInfo"
import Footer from "../../components/footer"
import CategorySellers from "../../components/sellers/categorySellers"
import ScrollToTop from '../../components/scroll'
import { useParams } from "react-router-dom"

function CategoryPage() {
  const params = useParams();
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