import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { AiFillHome } from 'react-icons/ai'

/*eslint-disable */

const CategoryPills = ({
    category,
    selectedCategory,
    onSelect
}) => {

    const containerRef = useRef(null)
    const [isLeftVisible, setIsLeftVisible] = useState(true)
    const [isRightVisible, setIsRightVisible] = useState(true)
    const [translate, setTranslate] = useState(0)

    const TRANSLATE_AMOUNT = 200

    const handleTranslateLeft = () => {
        setTranslate(val => {
            const newTranslate = val - TRANSLATE_AMOUNT
            if (newTranslate <= 0) return 0
            return newTranslate
        })
    }

    const handleTranslateRight = () => {
        setTranslate(val => {
            if (containerRef.current === null) return translate
            const newTranslate = val + TRANSLATE_AMOUNT

            const edge = containerRef.current.scrollWidth
            const width = containerRef.current.clientWidth

            //when reaching the end, if newTranslate is excess, return only the required amount to hit the end
            if (newTranslate + width >= edge) return edge - width
            return newTranslate
        })
    }

    useEffect(() => {
        if (containerRef.current === null) return translate

        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target

            if (container === null) return

            setIsLeftVisible(translate > 0)
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        })

        observer.observe(containerRef.current)

        return () => {
            observer.disconnect()
        }
    }, [category, translate])


    return (
        <div
            ref={containerRef}
            className='overflow-x-hidden relative'
        >

            <div
                className=' flex whitespace-nowrap p-1 gap-3 transition-transform w-max'
                style={{ transform: `translate(-${translate}px)` }}
            >

                {category.map(category => (
                    <div
                        key={category}
                        className={` ${selectedCategory === category ? 'bg-secondary text-black hover:bg-white' : 'bg-customGrey hover:bg-customGrey-hover'}
                    flex rounded-lg bg-[#E5E5E5] flex-col justify-center shadow-inner items-center w-40 space-y-5 p-8`}>

                        <AiFillHome className='text-2xl' />
                        <Button
                            onClick={() => onSelect(category)}
                            className={`
                           
                        select-none text-xs font-semibold whitespace-nowrap py-1 px-3  rounded-lg `}
                        >
                            {category}
                        </Button>

                    </div>
                ))}

                {/* ${selectedCategory === category ? 'bg-secondary text-black hover:bg-white' : 'bg-customGrey hover:bg-customGrey-hover'} */}

            </div>


            {isLeftVisible &&
                <div className='absolute left-0 top-1/2 -translate-y-1/2
            bg-gradient-to-r from-primary from-50% to-transparent w-24 h-[95%]'>

                    <Button
                        onClick={handleTranslateLeft}
                        quickCss='icon'
                        className="aspect-square h-full w-auto p-1.5 hover:bg-customGrey-hover"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>

                </div>
            }


            {isRightVisible &&
                <div className='absolute right-0 top-1/2 -translate-y-1/2
            bg-gradient-to-l from-primary from-50% to-transparent w-24 h-[95%] flex justify-end'>

                    <Button
                        onClick={handleTranslateRight}
                        quickCss='icon'
                        className="aspect-square h-full w-auto p-1.5 hover:bg-customGrey-hover"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>

                </div>
            }

        </div>
    )
}

export default CategoryPills