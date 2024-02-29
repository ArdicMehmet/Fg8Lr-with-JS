import backArrowIcon from '../../images/icons/BackArrow.png'


function PageInfo({categoryName}) {
  return (
    <div className='container px-[3rem] flex items-center mt-10 mb-8'>
        <div className="imgContainer flex justify-center items-center cursor-pointer">
            <img className='me-2 mt-1 item-end object-cover' src={backArrowIcon} alt="backArrow" />
        </div>
        <span className='text-xl font-semibold'>{categoryName}</span>
    </div>
  )
}

export default PageInfo