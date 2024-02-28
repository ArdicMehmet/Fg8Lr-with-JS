import React from 'react'
import backIcon from "../../images/icons/BackArrow.png"
function Title({ categoryName, categoryId }) {
    return (
        <div className="w-full flex justify-between mb-5">
            <p className="font-bold text-3xl cursor-pointer">{categoryName}</p>
            <p className='text-deep_orange font-bold text-xl cursor-pointer flex items-end' >View all</p>
        </div>
    )
}

export default Title