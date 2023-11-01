import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
/*eslint-disable */

const Slider = ({
    images,
    classSlider,
    children
}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        //when we are in index 0, we want to move to last index when using prevSlide
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1

        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const id = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => {
            clearInterval(id)
        }
    }, [currentIndex])


    return (
        <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className={`${classSlider} relative bg-cover bg-no-repeat bg-center duration-500`}>

            <FontAwesomeIcon
                className='absolute top-[50%] -translate-x-0 translate-y-[-350%] md:translate-y-[-50%] left-5 bg-transparent cursor-pointer'
                onClick={prevSlide} icon={faChevronLeft} />

            <FontAwesomeIcon
                className='absolute top-[50%] -translate-x-0 translate-y-[-350%] md:translate-y-[-50%] right-5 bg-transparent cursor-pointer'
                onClick={nextSlide} icon={faChevronRight} />


            <div className='absolute bottom-2 space-x-4 hidden md:flex'>

                {images.map((_, index) => (
                    <div key={index} className='w-2 h-2 rounded-full border-2 border-slate-300 bg-primary cursor-pointer'
                        onClick={() => setCurrentIndex(index)} ></div>
                ))}
            </div>

            {children && children}

        </div>
    )
}

export default Slider