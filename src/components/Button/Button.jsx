/*eslint-disable */
const Button = ({
    quickCss,
    label,
    onClick,
    type = 'button',
    className,
    children
}) => {

    const quickClass = {
        default: "",
        icon: "rounded-full w-10 h-10 flex items-center justify-center p-2.5"
    }

    return (
        <button
            type={type}
            className={`${className} ${quickCss === 'icon' ? quickClass.icon : quickClass.default} 
            cursor-pointer transition-all duration-150`}
            onClick={onClick}
        >

            {label && label}
            {children && children}

        </button>
    )
}

export default Button