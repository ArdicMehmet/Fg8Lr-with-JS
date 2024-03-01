import { useEffect, useState } from "react";
import img from "../../images/imageComponent.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function CardComponent({ bookId, bookName, bookAuthor, price, cover }) {

  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    axios({
      url: 'https://assign-api.piton.com.tr/api/rest/cover_image',
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
  useEffect(() => {
    console.log("imageee",imageUrl);
  }, [imageUrl])

  return (
    <div className="p-2.5 bg-cardBg font-monarope w-80 flex rounded cursor-pointer" onClick={_ => navigate(`/book-details/${bookId}`)}>
      <div className="w-2/5">
        <img className="w-[120px] h-[180px] object-cover" src={imageUrl} alt="image" />
      </div>
      <div className="w-3/5 mx-5 my-2.5 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-xl">{bookName}</p>
          <p className="font-semibold text-base opacity-60">{bookAuthor}</p>
        </div>
        <div>
          <p className="font-bold font-2xl text-deep_purple">{price}$</p>
        </div>
      </div>
    </div>
  )
}

export default CardComponent