import { useNavigate } from "react-router-dom";
import { isOpenSidebarCategory } from '../../redux/index'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Button } from '../../components/index';
import { fetchAllCategories } from '../../APIs/productAPIs'
import { useQuery } from "@tanstack/react-query";


// on Page reload, call the api again to get category.
// conflict: both home and call has apicall access. and only one should call the api
// conclusion: onPage visit, call api only in sidebar. Remove api call from Home.
// reason: Sidebar gets loaded on page visit and reload thus calling the api whereas Home can call api only when home is mounted

const CategorySidebar = () => {

    // const navigate = useNavigate(); 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isSidebarOpenCategory = useSelector(state => state.sidebarRelatedReducer.isOpenCategory, shallowEqual)


    const allCategoryQuery = useQuery({
        queryKey: ["allCategory"],
        queryFn: fetchAllCategories
    })



    const toggleSidebar = () => {
        dispatch(isOpenSidebarCategory(!isSidebarOpenCategory))
    }


    return (
        <>
            <div
                className={`${isSidebarOpenCategory ? "translate-x-0" : "-translate-x-full"} 
                bg-white p-1 fixed left-0 top-0 pb-10 h-screen w-[70%] shadow-2xl transform z-50 ease-in-out duration-500
                md:w-[40%] md:px-9 lg:w-[30%] xl:w-[20%]`}
            >

                <div className="flex flex-col items-start gap-1 mt-5 justify-start">
                    {allCategoryQuery.data?.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                toggleSidebar()
                                navigate(`/products/category/${item}`, { replace: true })
                            }}
                            className=" py-2 font-semibold text-left text-lg w-full text-black px-10 rounded-md flex-shrink-0">
                            <div>{item}</div>
                        </Button>
                    ))}

                </div>

            </div>


            {isSidebarOpenCategory && (
                <div
                    className="BACKGROUND z-10 w-full fixed h-screen overflow-hidden bg-black opacity-10"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default CategorySidebar;
