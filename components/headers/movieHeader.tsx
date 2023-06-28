import { BiArrowBack, BiMovie } from "react-icons/bi"
import Link from "next/link"

const MovieHeader = () => {
    return (
        <div className="w-full bg-white px-4 py-2">
            <div className="flex items-center justify-between">
                <div className="flex items-end space-x-2">
                    <p className="text-3xl font-lg">Movie comparison</p>
                    <BiMovie className="text-3xl"/>
                </div>
                
                <Link 
                    href={'/'}
                    className="flex items-center space-x-2"
                >
                    <BiArrowBack/>
                    <p className="mb-[2px]">Go back</p>
                </Link>
            </div>
            <div className="flex flex-col mt-2">
                <h1 >Search For a Movie on Both Sides</h1>
                <p >We will tell you which is best!</p>
            </div>
        </div>
    )
}

export default MovieHeader