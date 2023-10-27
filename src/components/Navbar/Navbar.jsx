import { useState } from 'react'
import Button from '../Button/Button'

/*eslint-disable */
const Navbar = ({
    items,
    classNav,
    classList,
    classItems,
    classHamburger,
    children
}) => {

    const [toggleNav, setToggleNav] = useState(false)


    return (
        <>
            <div className={`${classNav} NAVBAR relative flex justify-between items-center p-5`}>
                <div className="menu text-bold 
                    lg:hidden">Menu</div>

                <div className={`${toggleNav ? '' : 'hidden'} ${classList} z-40 features mx-8 absolute h-fit inset-0
                    lg:flex lg:static lg:translate-y-0 lg:items-center lg:justify-center lg:w-auto lg:inset-auto lg:space-x-4 lg:mx-0
                    xl:space-x-12`}>

                    {items.map((item, i) => (
                        <div key={i} className={`${classItems} p-5 border-b lg:p-0 lg:border-none`}><a href="/">{item}</a></div>
                    ))}

                </div>

                <Button
                    onClick={() => setToggleNav((prev) => !prev)}
                    className="hamburger inline-block p-1 cursor-pointer
                    lg:hidden"
                >

                    <div className={`${classHamburger} line h-0.5 w-4 my-1`}></div>
                    <div className={`${classHamburger} line h-0.5 w-4 my-1`}></div>
                    <div className={`${classHamburger} line h-0.5 w-4 my-1`}></div>
                </Button>

                {children && children}

            </div>
        </>
    )
}

export default Navbar