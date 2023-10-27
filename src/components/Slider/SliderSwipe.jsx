import { useEffect, useState } from 'react'
import { networkPrev, networkNext } from '../../assets/index'

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

            <img onClick={prevSlide} src={networkPrev} alt="prev"
                className='absolute top-[50%] md:-translate-x-[550%] -translate-x-[250%] translate-y-[-50%] left-5 bg-transparent cursor-pointer'
            />
            <img onClick={nextSlide} src={networkNext} alt="next"
                className='absolute top-[50%] md:translate-x-[550%] translate-x-[250%] translate-y-[-50%] right-5 bg-transparent cursor-pointer'
            />


            <div className='absolute bottom-2 flex space-x-4'>

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
