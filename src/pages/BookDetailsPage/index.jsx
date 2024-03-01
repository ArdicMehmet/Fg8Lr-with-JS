import React,{useState, useEffect} from 'react'
import Header from '../../components/header'
import CardDetail from '../../components/cards/cardDetail'
import PageInfo from '../../components/pageInfo'
import HeartBtn from '../../images/icons/Heart.png'
import { baseUrl } from '../../api/pitonTechnology'
import axios from 'axios'

import ScrollToTop from '../../components/scroll'

import { useNavigate, useLocation,useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function BookDetails() {
  
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { user } = useSelector(state => state.user);

  useEffect(()=>{
    (user || (localStorage.getItem("auth"))) ? "" : navigate('/login');
  },[location])
  
  const { getProducts } = useSelector(state => state.book);
  const [book, setBook] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    getProducts.forEach((products) => {
      products.books.forEach(product => {
        console.log("Products : ",product);
        if (product.id == params.id) {
          setBook({ ...product });
          console.log("kitap bulundu : ", product);
        }
      })
    })

  }, [getProducts])

  useEffect(() => {
    axios({
      url: `https://assign-api.piton.com.tr/api/rest/cover_image`,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        fileName: book.cover,
      }
    }).then((img) => setImageUrl(`${img.data.action_product_image.url}`));
  }, [book])

  return (
    <>
      <Header />
      <PageInfo categoryName={"Book Details"} />
      <main className='container flex px-[3rem] font-manrope'>
        <div className="w-1/4">
          <CardDetail url={`${imageUrl}`} />
        </div>
        <div className="w-3/4 ps-20">
          <div className='flex justify-between'>
            <h1 className='text-[32px] md:text-3xl sm:text[28px] font-semibold pb-2.5'>{book.name}</h1>
            <img src={HeartBtn} className='cursor-pointer' alt="Heart" />
          </div>

          <h3 className='text-2xl md:text-[22px] sm:text-xl text-gray-900_99 font-semibold pb-14'>{book.author}</h3>
          <p className='text-justify font-light font-bold pt-2.5 text-gray-900_99'>
           {book.description}
          </p>
          <div className='w-[400px] h-[60px] bg-deep_orange flex justify-between items-center py-2.5 px-5 rounded text-xl text-white cursor-pointer ms-auto mt-48'>
            <span className='font-bold'>{book.price}$</span>
            <span className='font-semibold'>Buy Now</span>
          </div>
        </div>
      </main>
      <ScrollToTop />
    </>
  )
}

