import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
/*eslint-disable */

const Carousel = ({
    images = [],
}) => {

    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    useEffect(() => {
        const id = setInterval(() => {
            showNextImage()
        }, 3000)

        return () => {
            clearInterval(id)
        }
    }, [imageIndex])

    return (

        <div className='w-full h-full relative p-0'>

            <div className=' w-full h-full flex overflow-hidden'
            >
                {images.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        className="transition-all duration-300 ease-in-out slider aspect-video object-cover w-full block flex-shrink-0 flex-grow-0"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>


            <Button
                quickCss={'icon'}
                onClick={showPrevImage}
                className="absolute top-1/2 -translate-y-1/2 left-5
                bg-customGrey border border-customGrey hover:bg-customGrey-hover flex-shrink-0"
            >
                <FontAwesomeIcon
                    className='cursor-pointer'
                    icon={faChevronLeft}
                />

            </Button>

            <Button
                quickCss={'icon'}
                onClick={showNextImage}
                className="absolute top-1/2 -translate-y-1/2 right-5
                bg-customGrey border border-customGrey hover:bg-customGrey-hover flex-shrink-0"
            >
                <FontAwesomeIcon
                    className='cursor-pointer'
                    icon={faChevronRight}
                />

            </Button>

        </div>

    )
}

export default Carousel


