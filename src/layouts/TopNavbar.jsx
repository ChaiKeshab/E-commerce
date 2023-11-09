import { useState, useEffect } from 'react'
import { Button, Input } from '../components'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faBell, faUser, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { isOpenSidebarCart, isOpenSidebarCategory, isOpenSidebarNotification } from '../redux/index'

const Navbar = () => {

    const dispatch = useDispatch()
    const isSidebarOpenCart = useSelector(state => state.sidebarRelatedReducer.isOpenCart, shallowEqual)
    const isSidebarOpenCategory = useSelector(state => state.sidebarRelatedReducer.isOpenCategory, shallowEqual)
    const isSidebarOpenNotification = useSelector(state => state.sidebarRelatedReducer.isOpenCartNotification, shallowEqual)
    const reduxCartItems = useSelector((state) => state.cartRelatedReducer.cart, shallowEqual);

    const [qsearch, setQsearch] = useState('')
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    const [isScrolling, setIsScrolling] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('searchSubmit')
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isScrolling])


    return (
        <>
            <nav className={`${isScrolling ? 'shadow-lg' : 'shadow-sm'} z-10 m-0 bg-customGrey fixed top-0 w-full flex h-24 gap-10 items-center justify-between px-4
            lg:gap-20`}>


                <div className={`${showFullWidthSearch ? 'hidden' : 'flex'} 
                gap-4 items-center flex-shrink-0`}>

                    <Button
                        onClick={() => dispatch(isOpenSidebarCategory(!isSidebarOpenCategory))}
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
                        onClick={() => dispatch(isOpenSidebarCart(!isSidebarOpenCart))}
                        quickCss='icon'
                        className="hover:bg-customGrey-hover relative"
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        {reduxCartItems.length > 0 &&
                            <div className='absolute flex justify-center items-center bg-red-600 aspect-square w-4 rounded-full text-white text-xs right-0 bottom-0 -translate-x-1/3 -translate-y-1/3'>{reduxCartItems.length}</div>
                        }

                    </Button>

                    <Button isSidebarOpenNotification
                        onClick={() => dispatch(isOpenSidebarNotification(!isSidebarOpenNotification))}
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

            {/* <Outlet context={{ qsearch }} /> */}
        </>
    )
}

export default Navbar