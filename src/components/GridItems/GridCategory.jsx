import { Link } from "react-router-dom"
// import { FcElectronics } from 'react-icons/fc';
/*eslint-disable */


const GridCategory = ({ category, image }) => {

    return (
        <div className="flex my-5 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.5)] rounded gap-2">

            <Link to={`/products/category/${category}`} className="relative group flex w-full flex-col justify-between">

                <img
                    src={image}
                    className="block aspect-video w-full object-cover object-center transform transition-all duration-150
                    "
                    alt="product" />


                <div className="absolute bg-[rgba(255,255,255,0.6)] text-shadow p-2 flex flex-col gap-1 flex-grow text-sm px-5
                    top-2 left-2">
                    {/* bg-gradient-to-b from-slate-200 from-50% to-transparent */}

                    <h2 className="text-xl font-semibold">{category}</h2>
                </div>


                <div className="absolute left-2 bottom-2 bg-[rgba(255,255,255,0.6)] p-2 flex flex-col gap-1 rounded-sm flex-grow text-sm px-5">
                    <p className="text-base group-hover:text-red-600 text-black">See More</p>

                </div>
            </Link>
        </div>
    )
}

export default GridCategory
