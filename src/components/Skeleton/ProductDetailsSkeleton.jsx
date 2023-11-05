
const ProductDetailsSkeleton = () => {
    return (
        <div>
            <div className="h-full flex flex-col items-center justify-center 
            md:flex-row">

                <div className="flex w-[400px] aspect-[1/1.2] items-center justify-center p-4
                    md:w-[600px]">
                    <div className="skeleton rounded-3xl p-5 aspect-square w-full object-contain transform transition-all duration-150"></div>
                </div>

                <div className="skeleton p-4 h-[200px] rounded-3xl flex flex-col justify-end items-start md:w-full">

                    <div className="z-10 mb-2 bg-customGrey w-[90%] h-[10%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                    <div className="z-10 mb-2 bg-customGrey w-[90%] h-[10%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                    <div className="z-10 mb-2 bg-customGrey w-[90%] h-[10%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                    <div className="z-10 mb-2 bg-customGrey w-[50%] h-[10%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>

                </div>
            </div>

        </div >)
}

export default ProductDetailsSkeleton