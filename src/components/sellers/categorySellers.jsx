import CardPage from '../cards/cardPage';

function CategorySellers() {
    return (
        <>
            <div className="px-[3rem] w-full grid grid-cols-4 gap-5">
                <CardPage bookId={1} />
                <CardPage bookId={2} />
                <CardPage bookId={3} />
                <CardPage bookId={4} />
                <CardPage bookId={5} />
                <CardPage bookId={6} />
            </div>
        </>
    )
}

export default CategorySellers