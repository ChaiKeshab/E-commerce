
import { useSelector, useDispatch } from "react-redux";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isOpenSidebar } from '../../redux/index'


const CartSidebar = () => {

    // const navigate = useNavigate(); 
    const isSidebarOpen = useSelector(state => state.sidebarControl.isOpen)
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(isOpenSidebar(!isSidebarOpen))
    }


    return (
        <>
            <div
                className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
                bg-white fixed right-0 top-0 pb-10 h-full w-2/3 shadow-2xl transform z-50 ease-in-out duration-500 overflow-y-auto
                sm:w-1/3 `}
            >
                <div
                    className="py-2 px-6 mt-5 flex justify-end cursor-pointer rounded-md"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faX} />
                </div>

                <div className="w-full mt-7 px-5">

                </div>

                <hr className="w-full mt-5" />

                <div className="mt-7 px-5 w-full flex flex-col gap-y-2">


                </div>

                <hr className="w-full mt-5" />

                <div className="mt-7 w-full flex flex-col gap-y-2 px-5">
                </div>
            </div>


            {isSidebarOpen && (
                <div
                    className="BACKGROUNDBITCH z-10 w-full fixed h-screen"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
        // bg-black opacity-10
    );
};

export default CartSidebar;




// const Sidebar = () => {
//     return (
//         <aside className="bg-red-400 h-[100vh] w-full absolute top-0 overflow-y-auto pb-4 flex flex-col ml-1
//         shadow-2xl transition-all duration-300 z-10 px-4 left-0
//         md:w-[35vw] lg:px-[35px xl:max-w-[35vw]">
//             bar
//         </aside>
//     )
// }

// export default Sidebar

