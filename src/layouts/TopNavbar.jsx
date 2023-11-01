import { useEffect, useState } from 'react'
import { Button, Input } from '../components'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faBell, faUser, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { isOpenSidebar } from '../redux/index'

const Navbar = () => {

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.sidebarControl.isOpen, shallowEqual)
    console.log(isSidebarOpen, 'sideass')

    const [qsearch, setQsearch] = useState('')
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    const toggleSidebar = () => {
        dispatch(isOpenSidebar(!isSidebarOpen))
    }



    //bg-customGrey 
    //hover:bg-customGrey-hover
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('doggo')
    }

    return (
        <>
            <nav className='flex gap-10 justify-between pt-2 pb-3 mx-4
        lg:gap-20'>


                <div className={`${showFullWidthSearch ? 'hidden' : 'flex'} 
            gap-4 items-center flex-shrink-0`}>

                    <Button
                        onClick={toggleSidebar}
                        className="HAMBURG hover:bg-customGrey-hover"
                        quickCss='icon'
                    >
                        <FontAwesomeIcon className='h-5' icon={faBars} />

                    </Button>

                    {/* LOGO */}
                    <Link to="/">E-COMMERCE</Link>

                </div>



                <form
                    onSubmit={handleSubmit}
                    className={`${showFullWidthSearch ? 'flex' : 'hidden md:flex'} 
                    w-fit justify-center items-center gap-4 flex-grow`}>

                    {showFullWidthSearch &&
                        <Button
                            onClick={() => setShowFullWidthSearch(false)}
                            quickCss='icon'
                            className="hover:bg-customGrey-hover"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                    }


                    <div className='flex flex-grow items-center max-w-[600px]'>

                        <Input
                            placeholder={'Search'}
                            value={qsearch}
                            onChange={(e) => setQsearch(e.target.value)}
                            className='bg-[#F1F1F1] w-full shadow-none outline-none border border-customGrey rounded-r-none rounded-l-full px-4 py-2
                        focus:border-slate-500'
                        />

                        <Button
                            onClick={handleSubmit}
                            className="bg-customGrey border border-customGrey border-l-0 px-5 py-2 rounded-r-full hover:bg-customGrey-hover flex-shrink-0">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </div>


                    {/* <Button
                    quickCss='icon'
                    className="md:bg-customGrey hover:bg-customGrey-hover"
                >
                    <FontAwesomeIcon icon={faMicrophone} />
                </Button> */}

                </form>



                <div className={`${showFullWidthSearch ? 'hidden' : 'flex'} 
            items-center flex-shrink-0 md:gap-2`}>

                    <Button
                        onClick={() => setShowFullWidthSearch(true)}
                        quickCss='icon'
                        className="hover:bg-customGrey-hover
                    md:hidden">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>

                    {/* <Button
                    quickCss='icon'
                    className="hover:bg-customGrey-hover
                    md:hidden"
                >
                    <FontAwesomeIcon icon={faMicrophone} />
                </Button> */}

                    <Button
                        onClick={toggleSidebar}
                        quickCss='icon'
                        className="hover:bg-customGrey-hover"
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Button>

                    <Button
                        quickCss='icon'
                        className="hover:bg-customGrey-hover"
                    >
                        <FontAwesomeIcon icon={faBell} />
                    </Button>

                    <Button
                        quickCss='icon'
                        className="hover:bg-customGrey-hover"
                    >
                        {/* image avatar */}
                        <FontAwesomeIcon icon={faUser} />
                    </Button>
                </div>
            </nav>

            <Outlet context={{ qsearch }} />
        </>
    )
}

export default Navbar