import React from 'react'
import img from "../../images/imageDetails.png"
function CardDetail() {
    return (
        <div className="p-[60px] bg-cardBg font-monarope max-w-max rounded cursor-pointer rounded flex justify-center items-center">
            <img className="w-[300px] h-[450px] object-cover" src={img} alt="image" />
        </div>
    )
}

export default CardDetail