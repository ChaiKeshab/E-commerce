/*eslint-disable */

const Flag = ({
    image,
    alt = 'alt',
    label,
    className
}) => {
    return (
        <div className={`md:w-auto ${className}`} >
            <img src={image} alt={alt} />
            <p className="text-center">{label}</p>
        </div>
    )
}

export default Flag