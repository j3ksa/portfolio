import { BiArrowBack, BiMovie } from "react-icons/bi"
import Link from "next/link"

const MovieHeader = () => {
    return (
        <div className="w-full bg-movieBanner bg-cover px-4 py-2 text-white border border-b-2 border-black">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white bg-black px-2 py-1 rounded-lg text-base lg:text-3xl">
                    <p className="font-lg">Movie comparison</p>
                    <BiMovie />
                </div>
                
                <Link 
                    href={'/'}
                    className="flex items-center space-x-2 bg-black px-2 rounded-lg text-sm lg:text-lg"
                >
                    <BiArrowBack/>
                    <p className="mb-[2px]">Go back</p>
                </Link>
            </div>
            <div className="flex flex-col mt-2 space-y-1 font-semibold text-xs lg:text-base">
                <p className="bg-black px-2 rounded-lg w-fit">Search For a Movie on Both Sides</p>
                <p className="bg-black px-2 rounded-lg w-fit">Check what statistics interested you the most</p>
            </div>
        </div>
    )
}

export default MovieHeader