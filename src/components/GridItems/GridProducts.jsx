import { Link } from "react-router-dom"
import Spinner from '../Spinner/Spinner'
/*eslint-disable */


const GridProducts = ({
    id,
    title,
    price,
    category,
    description,
    image,
    loading
}) => {

    return (
        <div className="flex shadow-[0px_3px_10px_0px_rgba(0,0,0,0.5)] rounded-lg gap-2">

            <Link to={`/products/${id}`} className="flex flex-col justify-between w-full">
                {loading ?
                    <div className="flex items-center justify-center aspect-square w-full rounded-xl ">
                        <Spinner className='block w-40 h-40' />
                    </div>
                    : (
                        <img
                            src={image}
                            className="block p-20 aspect-square w-full object-contain rounded-xl transform transition-all duration-150
                            hover:scale-125"
                            alt="product"
                        />
                    )}

                <div className=" p-5 flex w-full flex-col gap-1 bg-customGrey rounded-t-lg flex-grow text-sm px-5">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-blue-800 text-lg">${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default GridProducts