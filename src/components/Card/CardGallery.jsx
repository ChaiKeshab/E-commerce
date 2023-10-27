/*eslint-disable */
import Button from '../Button/Button'

const CardGallery = ({

    title,
    classname,
    image,
    alt = 'alt',
    iframe,
    news
}) => {
    return (

        <div className={`${classname} w-full md:w-1/3 p-4 mt-4 pb-6 bg-[#F5F5F5] md:mx-4`}>
            <div className='w-max'>
                <h1 className='text-left text-3xl pt-4'>{title}</h1>
                <div className="LINE relative bottom-1 w-full border-t border-gray-300"></div>
            </div>

            <div className="mt-8 flex flex-col items-center">

                {image &&
                    <>
                        <img className='w-full' src={image} alt={alt} />
                        <Button
                            className='text-white bg-primary w-fit mt-8 py-2 px-7 border-2 border-primary hover:bg-transparent hover:text-primary'
                            label='More Countries' />
                    </>
                }
                {iframe && iframe}
                {news && news}
            </div>
        </div>
    )
}

export default CardGallery