import React from 'react'
import Title from '../title'
import CardComponent from '../cards/cardComponent'

function HomeSellers({title,bookName,bookAuthor,price}) {
    return (
        <div className='mb-[60px]'>
            <Title categoryName={title} />
            <div className="sellMain w-full grid grid-cols-4 gap-5">
                <CardComponent bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookName={bookName} bookAuthor={bookAuthor} price={price} />
            </div>
        </div>
    )
}

export default HomeSellers