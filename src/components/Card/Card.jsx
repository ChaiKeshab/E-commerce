import Button from '../Button/Button'
/*eslint-disable */
const Card = ({
    image,
    alt = 'alt',
    title,
    date,
    time,
    location,
    country
}
) => {

    return (
        <div className="flex flex-col py-4">

            <div className='image w-full'>
                <img className='w-full h-full' src={image} alt={alt} />
            </div>

            <div className='border-t-4 p-4 bg-[#F5F5F5] border-primary'>
                <h1 className='text-2xl py-2'>{title}</h1>
                <div className="flex space-x-4 py-2 text-lg">
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{location}</p>
                </div>
                <h2 className='text-xl font-bold pt-2'>{country}</h2>
                <h3 className='text-lg '>Study in {country}</h3>

                <div className='flex flex-grow justify-center space-x-4 mt-12
                md:justify-start md:w-9/12'>
                    <Button
                        label='View More'
                        className='bg-primary text-white w-full py-2 border-2 border-primary hover:bg-transparent hover:text-primary'
                    />
                    <Button
                        label='Register'
                        className='bg-primary text-white w-full py-2 border-2 border-primary hover:bg-transparent hover:text-primary'
                    />
                </div>
            </div>


        </div>
    )
}

export default Card