import React from "react"
import { Carousel2, GridCategory, HomeSkeleton } from "../components/index"
import { slider1, slider2, slider3 } from '../assets/index'
import { Footer } from '../layouts/index'
import { useQuery } from "@tanstack/react-query"
import { fetchAllCategories } from '../APIs/productAPIs'


const Home = () => {

    const allCategoryQuery = useQuery({
        queryKey: ["allCategory"],
        queryFn: fetchAllCategories,
    })


    const categoryImage = [
        "https://media.istockphoto.com/id/166107706/photo/mobility-concept-with-digital-devices-on-laptop.jpg?s=1024x1024&w=is&k=20&c=38kZDJpBO6ExEFLl4gx3OvwErxub4k9rlSFIr-MwjwE=",
        "https://media.istockphoto.com/id/1314987155/photo/modern-golden-bracelets-and-ring-on-white-and-blue-background-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=5oessBT4lbl51Wwn03rGx-YG6LynPFz5sOfRFzh_B1A=",
        "https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.jpg?s=1024x1024&w=is&k=20&c=-BsXgBv4bInxT6KYogAf5skICwHrZWKdm8ej5M3R1R8=",
        "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=1024x1024&w=is&k=20&c=Gql7NywbC_I7RZqVDtN60i_XB9_kReFRYaoZzdpXPtc="]


    return (
        <div className="HOME">
            {/* <div className=' top-0 z-10 pb-2 bg-primary'>

            </div> */}

            <div className="w-full">
                <Carousel2
                    images={[slider2, slider1, slider3]}
                />
            </div>
            <div className="grid mt-10 px-5 md:px-32 gap-10 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">

                {allCategoryQuery.isLoading ? <HomeSkeleton /> : (
                    allCategoryQuery.data?.map((item, index) => (

                        <React.Fragment key={index}>
                            <GridCategory
                                category={item}
                                image={categoryImage[index]}
                            />
                        </React.Fragment>
                    ))

                )}
            </div>

            <Footer />

        </div>
    )
}

export default Home