/*eslint-disable */

const TestCard = ({
    image,
    alt = null,
    classname,
    label
}) => {
    return (
        <button className={`${classname} hover:cursor-pointer flex flex-col items-center justify-center
        md:p-6`}>
            <img src={image} alt={alt} />
            {label && <p className="text-center mt-8 lg:text-lg">{label}</p>}
        </button>
    )
}

export default TestCard