import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bannerImage from '../../images/Banner.png'


const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <div className="item" data-value="1"><img className='mx-auto w-full h-[400px]' src={bannerImage} alt="bannerImage" /></div>,
    <div className="item" data-value="2"><img className='mx-auto w-full h-[400px]' src={bannerImage} alt="bannerImage" /></div>,
    <div className="item" data-value="3"><img className='mx-auto w-full h-[400px]' src={bannerImage} alt="bannerImage" /></div>,
];



function Carousel() {
  return (
    <AliceCarousel
        mouseTracking = {false}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        animationDuration={400}
        autoPlay={true}
        autoPlayInterval={2000}
    />
  )
}

export default Carousel