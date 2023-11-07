import Slider from 'react-slick'; // Import the Slider component from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Carousel = ({
    images = [],
}) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings} className='w-full text-center overflow-x-hidden'>
                {images.map((url, index) => (
                    <img src={url} alt="" key={index}
                        className="max-h-[300px] object-cover md:max-h-[600px]"
                    />
                ))}


            </Slider>
            <style className='hidden'>
                {`
                .slick-dots {
                    position: static;
                }
                `}
            </style>
        </>
    );
};

export default Carousel;
