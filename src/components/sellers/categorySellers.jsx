import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPage from '../cards/cardPage';
import { useSelector } from 'react-redux'

function CategorySellers() {
    let params = useParams();
    const [books, setBooks] = useState([]);
    const { getProducts } = useSelector(state => state.book);
    useEffect(() => {
        if (getProducts) {
            let data = getProducts?.find((product) => product.id == params.id);
            data ? setBooks([...data.books]) : ''
        }

    }, [getProducts])

    useEffect(()=>{
        console.log(books);
    },[books])
    return (
        <>
            <div className="px-[3rem] w-full grid grid-cols-4 gap-5">
                {books ? books.map((book,i)=><CardPage key={i} bookId={book.id} categoryId={params.id} cover={book.cover} bookName={book.name} bookAuthor={book.author} price={book.price}></CardPage>) : ''}
            </div>
        </>
    )
}

export default CategorySellers