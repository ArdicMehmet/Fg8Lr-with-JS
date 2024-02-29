import { useNavigate } from "react-router-dom"
import img from "../../images/imagePage.png"

function CardPage({bookId}) {

  const navigate = useNavigate();
  
  return (
    <div className="p-5 bg-cardBg font-monarope w-80 flex flex-col rounded cursor-pointer rounded" onClick={ _ => navigate(`/book-details/${bookId}`)}>
      <div className="w-full flex justify-center">
        <img className="w-[200px] h-[300px] object-cover" src={img} alt="image" />
      </div>
      <div className="w-full py-2.5 flex">
        <div className="w-1/2">
          <p className="font-semibold text-xl">Dune</p>
          <p className="font-semibold text-base opacity-60">Frank Herbert</p>
        </div>
        <div className="w-1/2 flex justify-end items-end">
          <p className="font-bold font-2xl text-deep_purple mb-2.5">87.5$</p>
        </div>
      </div>
    </div>
  )
}

export default CardPage