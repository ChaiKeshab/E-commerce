import { Link } from "react-router-dom"
/*eslint-disable */


const GridCategory = ({ category, image }) => {

    return (
        <div className="flex my-5 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.5)] rounded gap-2">

            <Link to={`/products/category/${category}`} className="group flex flex-col justify-between">

                <div className=" p-5 flex flex-col gap-1 rounded-t-lg flex-grow text-sm px-5
                bg-gradient-to-b from-slate-200 from-50% to-transparent">

                    <h2 className="text-xl font-semibold">{category}</h2>
                </div>

                <img
                    src={image}
                    className="block p-20 aspect-square w-full object-contain rounded-xl transform transition-all duration-150
                    hover:scale-125"
                    alt="product" />

                <div className=" p-5 flex flex-col gap-1  rounded-t-lg flex-grow text-sm px-5">
                    <p className="text-base group-hover:text-red-600 text-blue-600">See More</p>

                </div>
            </Link>
        </div>
    )
}

export default GridCategory
