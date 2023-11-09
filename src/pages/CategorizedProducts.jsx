import { GridProducts, CategorizedSkeleton } from "../components/index"
import { useParams } from "react-router-dom"
import { fetchSpecificCategory } from '../APIs/productAPIs'
import { useQuery } from "@tanstack/react-query"

const Products = () => {

    const { id } = useParams()

    const specificCategory = useQuery({
        queryKey: ["specificCategory", id],
        queryFn: () => fetchSpecificCategory(id)
    })

    console.log(specificCategory.data)

    return (
        <div className="Category pt-5">

            <div className="grid p-4 gap-4 pt-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {specificCategory.isLoading ? <CategorizedSkeleton /> : (

                    specificCategory.data?.map(item => (

                        <GridProducts
                            key={item.id}
                            {...item}
                            loading={specificCategory.isLoading}
                        />
                    ))
                )}
            </div>


        </div>
    )
}

export default Products
