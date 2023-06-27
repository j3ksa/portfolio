import Image from "next/image"
import { useState } from "react"

const Hero = () => {
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
            <p className="text-xl lg:text-5xl">Welcome to my code file</p>
            <p className="text-lg lg:text-xl">Feel free to explore</p>
            <Image
                src={counter === 9 ? "/assets/sauronEye.jpg" : "/assets/stamp.png"}
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
export default Hero