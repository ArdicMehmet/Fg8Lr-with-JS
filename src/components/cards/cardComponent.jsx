import img from "../../images/imageComponent.png"

function CardComponent({bookName,bookAuthor,price}) {
  return (
    <div className="p-2.5 bg-cardBg font-monarope w-80 flex rounded cursor-pointer">
      <div className="w-2/5">
        <img className="w-[120px] h-[180px] object-cover" src={img} alt="image" />
      </div>
      <div className="w-3/5 mx-5 my-2.5 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-xl">{bookName}</p>
          <p className="font-semibold text-base opacity-60">{bookAuthor}</p>
        </div>
        <div>
          <p className="font-bold font-2xl text-deep_purple">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardComponent