import React from "react"
import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { fetchAllCategory } from '../redux/index'
import { Carousel, GridCategory, HomeSkeleton } from "../components/index"

import { slider1, slider2, slider3 } from '../assets/index'
import { Footer } from '../layouts/index'


const Home = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)

    const categoryArr = useSelector((state) => state.productRelatedReducer.allCategory, shallowEqual)
    const categoryLoading = useSelector((state) => state.productRelatedReducer.loading, shallowEqual)

    console.log(categoryLoading)
    useEffect(() => {
        // preventing double api call.
        if (apiCallRef.current === false) {
            dispatch(fetchAllCategory())
        }

        return () => {
            apiCallRef.current = true
        }

    }, [dispatch])

    const categoryImage = [
        "https://media.istockphoto.com/id/166107706/photo/mobility-concept-with-digital-devices-on-laptop.jpg?s=1024x1024&w=is&k=20&c=38kZDJpBO6ExEFLl4gx3OvwErxub4k9rlSFIr-MwjwE=",
        "https://media.istockphoto.com/id/1314987155/photo/modern-golden-bracelets-and-ring-on-white-and-blue-background-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=5oessBT4lbl51Wwn03rGx-YG6LynPFz5sOfRFzh_B1A=",
        "https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.jpg?s=1024x1024&w=is&k=20&c=-BsXgBv4bInxT6KYogAf5skICwHrZWKdm8ej5M3R1R8=",
        "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=1024x1024&w=is&k=20&c=Gql7NywbC_I7RZqVDtN60i_XB9_kReFRYaoZzdpXPtc="]

    // const fakeCategory = [
    //     "All",
    //     "Gaming",
    //     "Music",
    //     "Travel",
    //     "Vlogs",
    //     "Cooking",
    //     "How - To & DIY",
    //     "Entertainment",
    //     "Education",
    //     "Technology",
    //     "Comedy",
    //     "Fitness & Wellness",
    //     "Fashion & Beauty",
    //     "News & Politics",
    //     "Sports",
    //     "Kids & Family",
    //     "Science & Nature",
    //     "Pets & Animals",
    //     "Art & Creativity",
    //     "Lifestyle"
    // ]

    // const [selectedCategory, setSelectedCategory] = useState(categoryArr[0])

    return (
        <div className="HOME">
            <div className=' top-0 z-10 pb-2 bg-primary'>

            </div>

            <div className="h-[300px] md:h-[600px]">
                <Carousel
                    images={[slider2, slider1, slider3]}
                />
            </div>

            <div className="grid mt-10 px-5 md:px-32 gap-10 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {categoryArr.map((item, index) => (

                    <React.Fragment key={index}>
                        {categoryLoading ? <HomeSkeleton /> : (
                            <GridCategory
                                category={item}
                                image={categoryImage[index]}
                            />
                        )}
                    </React.Fragment>
                ))}

            </div>

            <Footer />

        </div>
    )
}

export default Home