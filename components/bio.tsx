import Image from "next/image"
import { TabNames } from "interfaces/tabs"
import { useState } from "react"

const Bio = (  ) => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        if(counter > 9) {
            setCounter(0)
        } else {
            setCounter(counter+1)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-orange-300 space-y-16 w-[90%] rounded-b-[20px] rounded-t-[2px] py-4">
            <p className="text-xl">Hi, my name is Łukasz and i have been front-end developer for a past 3 years.</p>
            <p className="text-lg">In a free time i love to ride a bike, play or watch english football and play video games.</p>
            <div>

            </div>
            <Image
                src={"/assets/profile.jpeg"}
                alt="myFace"
                width={300}
                height={300}
                sizes="300px"
                quality={100}
                className="rounded-full p-4 lg:p-0 hover:cursor-pointer"
                onClick={handleCounter}
            />
        </div>
    )
}
export default Bio