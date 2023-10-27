/*eslint-disable*/


const Divider = ({
    title,
    classH1,
    classDiamond
}) => {
    return (
        <>
            <h1 className={`${classH1} text-center text-3xl pt-4`}>{title}</h1>

            <div className="DIVIDER w-80 mx-auto my-5 border-t border-gray-300 relative md:w-96">
                <div className={`${classDiamond} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gray-300 rotate-45`}></div>
            </div>
        </>
    )
}

export default Divider

