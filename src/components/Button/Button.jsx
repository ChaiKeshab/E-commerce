/*eslint-disable */
const Button = ({
    onClick,
    label,
    type = 'button',
    className,
    children
}) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`${className} transition-colors duration-300`}
            >
                {label && label}
                {children && children}
            </button>
        </>
    )
}

export default Button