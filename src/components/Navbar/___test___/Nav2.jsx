import { useState } from 'react'
import Button from '../../Button/Button'

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false)

    return (
        <>
            <div className="NAVBAR flex bg-primary text-white justify-between items-center p-5
                lg:justify-center">
                <div className="menu text-bold 
                    lg:hidden">Menu</div>

                <div className={`${toggleNav ? '' : 'hidden'} z-40 features mx-8 absolute h-fit inset-0 bg-primary translate-y-60
                    lg:flex lg:static lg:translate-y-0 lg:items-center lg:justify-center lg:w-auto lg:inset-auto lg:space-x-4 lg:mx-0
                    xl:space-x-12`}>
                    <div className="p-5 lg:p-0 lg:border-none"><a href="/">STUDY ABROAD</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">COURSES</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">UNIVERSITY VISIT</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">TIPS</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">INTERNSHIP PROGRAMS</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">SCHOLARSHIPS</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">STUDENT SUPPORT</a></div>
                    <div className="p-5 border-t border-border lg:p-0 lg:border-none"><a href="/">CONTACT US</a></div>
                </div>

                <Button
                    onClick={() => setToggleNav((prev) => !prev)}
                    className="hamburger inline-block p-1 cursor-pointer
                    lg:hidden">

                    <div className="line h-0.5 w-4 my-1 bg-white"></div>
                    <div className="line h-0.5 w-4 my-1 bg-white"></div>
                    <div className="line h-0.5 w-4 my-1 bg-white"></div>
                </Button>

            </div>
        </>
    )
}

export default Navbar