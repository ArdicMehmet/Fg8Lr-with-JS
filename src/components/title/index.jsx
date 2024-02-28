import React from 'react'
import backIcon from "../../images/icons/BackArrow.png"
function Title({ categoryName, categoryId }) {
    return (
        <div className='px-[3rem] flex'>
            <div className='flex items-center py-[6.5px]'><img className='w-[20px] h-[20px]' src={backIcon} alt="backArrow" /></div>
            <p className='font-bold text-2xl px-2.5 py-[6.5px]'>{categoryName}</p>
        </div>
    )
}

export default Title