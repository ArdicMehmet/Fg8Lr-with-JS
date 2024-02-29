import React from 'react'
import Title from '../title'
import CardComponent from '../cards/cardComponent'

function HomeSellers({title,titleId,bookId,bookName,bookAuthor,price}) {
    return (
        <div className='mb-[60px]'>
            <Title categoryName={title} categoryId={titleId} />
            <div className="sellMain w-full grid grid-cols-4 gap-5">
                <CardComponent bookId={bookId} bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookId={bookId} bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookId={bookId} bookName={bookName} bookAuthor={bookAuthor} price={price} />
                <CardComponent bookId={bookId} bookName={bookName} bookAuthor={bookAuthor} price={price} />
            </div>
        </div>
    )
}

export default HomeSellers