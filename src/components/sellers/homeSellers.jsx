import React, { useEffect, useState } from 'react'
import Title from '../title'
import CardComponent from '../cards/cardComponent'
import { useSelector } from 'react-redux'

function HomeSellers({ title, titleId, categoryId }) {
    const { getProducts } = useSelector(state => state.book);
    const [books, setBooks] = useState([]);
    
    
    useEffect(() => {
       if(getProducts){
        let data = getProducts?.find((product) => product.id == categoryId);
        data ? setBooks([...data.books]) : ''
    }

    }, [getProducts])


    return (
        
        <div className='mb-[60px]'>
            <Title key={titleId} categoryName={title} categoryId={titleId} />
            <div className="sellMain w-full grid grid-cols-4 gap-5">
                {books ? books.map((book,i)=>{
                   if(i<4){
                    return <CardComponent key={i} bookId={book.id} cover={book.cover} bookName={book.name} bookAuthor={book.author} price={book.price} categoryName={title} />
                   }
                   return <></>
                }): ''}
            </div>
        </div>
    )
}

export default HomeSellers