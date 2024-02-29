import Header from "../../components/header"
import PageInfo from "../../components/pageInfo"
import Footer from "../../components/footer"
import CategorySellers from "../../components/sellers/categorySellers"
import ScrollToTop from '../../components/scroll'

function CategoryPage() {
  return (
    <>
      <Header />
      <PageInfo categoryName="Best Seller" />
      <main className='general-container'>
        <CategorySellers />
      </main>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default CategoryPage