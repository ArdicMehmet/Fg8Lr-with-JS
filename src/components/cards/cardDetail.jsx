import React, { useEffect, useState } from 'react'

function CardDetail({url}) {
    
    return (
        <div className="p-[60px] bg-cardBg font-monarope max-w-max rounded cursor-pointer rounded flex justify-center items-center">
            <img className="w-[300px] object-cover" src={url} alt="image" />
        </div>
    )
}

export default CardDetail