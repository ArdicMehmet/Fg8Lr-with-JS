import img from "../../images/imageComponent.png"

function CardComponent() {
  return (
    <div className="p-2.5 bg-cardBg font-monarope w-80 flex rounded cursor-pointer">
      <div className="w-2/5">
        <img className="w-[120px] h-[180px] object-cover" src={img} alt="image" />
      </div>
      <div className="w-3/5 mx-5 my-2.5 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-xl">Dune</p>
          <p className="font-semibold text-base opacity-60">Frank Herbert</p>
        </div>
        <div>
          <p className="font-bold font-2xl text-deep_purple">87.5$</p>
        </div>
      </div>
    </div>
  )
}

export default CardComponent