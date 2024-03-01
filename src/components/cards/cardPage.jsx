import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/pitonTechnology";

function CardPage({bookId,bookName,bookAuthor, price, cover, categoryId}) {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    axios({
      url: `${baseUrl}/api/rest/cover_image`,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        fileName: cover,
      }
    }).then((img)=>setImageUrl(`${img.data.action_product_image.url}`));
   
  }, [])
  
  return (
    <div className="p-5 bg-cardBg font-monarope w-80 flex flex-col rounded cursor-pointer rounded" onClick={ _ => navigate(`/book-details/${bookId}`)}>
      <div className="w-full flex justify-center">
        <img className="w-[200px] h-[300px] object-cover" src={imageUrl} alt="image" />
      </div>
      <div className="w-full py-2.5 flex">
        <div className="w-1/2">
          <p className="font-semibold text-xl">{bookName}</p>
          <p className="font-semibold text-base opacity-60">{bookAuthor}</p>
        </div>
        <div className="w-1/2 flex justify-end items-end">
          <p className="font-bold font-2xl text-deep_purple mb-2.5">{price}$</p>
        </div>
      </div>
    </div>
  )
}

export default CardPage