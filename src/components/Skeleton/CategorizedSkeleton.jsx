const CategorizedSkeleton = () => {
    return (
        <>
            <div className="skeleton flex flex-col justify-end items-center aspect-[9/12] my-5 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.5)] rounded">
                <div className="z-10 mb-2 bg-customGrey w-[90%] h-[65%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                <div className="z-10 mb-2 bg-customGrey w-[90%] h-[5%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                <div className="z-10 mb-2 bg-customGrey w-[90%] h-[5%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                <div className="z-10 mb-2 bg-customGrey w-[90%] h-[5%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg"></div>
                <div className="z-10 mb-2 bg-customGrey w-[50%] h-[5%] bottom-0 shadow-[px_-3px_5px_3px_rgba(200,0,180,1)] rounded-lg relative -translate-x-[40%]"></div>
            </div>
        </>
    )
}

export default CategorizedSkeleton
