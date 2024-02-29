import React from 'react'
import backIcon from "../../images/icons/BackArrow.png"
import { useNavigate } from 'react-router-dom'

function Title({ categoryName, categoryId }) {
    const navigate = useNavigate();
    
    return (
        <div className="w-full flex justify-between mb-5">
            <p className="font-bold text-3xl cursor-pointer">{categoryName}</p>
            <p className='text-deep_orange font-bold text-xl cursor-pointer flex items-end'onClick={ _ => navigate(`/category/${categoryId}`)} >View all</p>
        </div>
    )
}

export default Title