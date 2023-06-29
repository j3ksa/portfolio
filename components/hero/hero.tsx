import Image from "next/image"
import { socials } from "info/socials"
import Social from "./social"

const Hero = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 from-[70%] to-blue-300 space-y-8 w-[80%] rounded-b-[20px] rounded-t-[2px] py-8 h-[600px]">
            <p className="text-xl lg:text-5xl font-semibold">Welcome to my code file</p>
            <p className="text-lg lg:text-xl font-semibold">Feel free to explore</p>
            <Image
                src={"/assets/stamp.png"}
                alt="myFace"
                width={300}
                height={300}
                sizes="300px"
                quality={100}
                priority
                className="rounded-full p-4 lg:p-0"
            />
            <div className={`flex items-center justify-center rounded-tr-[10px] rounded-tl-[10px] ml-2 px-10 py-[10px] relative min-w-[220px] space-x-2`}>
                {socials.map(social => (
                    <Social info={social}/>
                ))}
            </div>
        </div>
    )
}
export default Hero