import Image from "next/image"
import { useState } from "react"
import { socials } from "info/socials"
import Link from "next/link"

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
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 to-blue-300 space-y-8 w-[80%] rounded-b-[20px] rounded-t-[2px] py-8 h-[600px]">
            <p className="text-xl lg:text-5xl">Welcome to my code file</p>
            <p className="text-lg lg:text-xl">Feel free to explore</p>
            <Image
                src={counter === 9 ? "/assets/sauronEye.jpg" : "/assets/stamp.png"}
                alt="myFace"
                width={300}
                height={300}
                sizes="300px"
                quality={100}
                priority
                className="rounded-full p-4 lg:p-0 hover:cursor-pointer"
                onClick={handleCounter}
            />
            <div className={`flex items-center justify-center rounded-tr-[10px] rounded-tl-[10px] ml-2 px-10 py-[10px] relative min-w-[220px]`}>
                {socials.map(social => (
                    <Link
                        href={social.link}
                        key={social.id}
                        target="_blank"
                    >
                        <social.icon className="text-5xl text-black hover:text-gray-800 hover:scale-105"/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Hero