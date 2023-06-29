import Image from "next/image"
import { useState } from "react"
import { skills } from "info/skills"

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
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 from-[40%] to-green-300 space-y-8 w-[80%] rounded-b-[20px] rounded-t-[2px] h-[600px] overflow-y-auto overflow-x-hidden">
            <div className="flex items-center justify-center">
                <div className="w-[50%]">
                    <p className="text-lg text-center">Hi, my name is Łukasz and I'm a passionate and experienced front-end developer dedicated to crafting visually stunning and user-friendly websites. With a keen eye for detail and a deep understanding of modern web technologies, I strive to create seamless digital experiences that leave a lasting impression.</p>
                    <p className="text-lg text-center">In a free time i love to ride a bike, play or watch english football and play video games.</p>
                </div>
                <Image
                    src={counter === 9 ? "/assets/sauronEye.jpg" : "/assets/profile.jpeg"}
                    alt="myFace"
                    width={300}
                    height={300}
                    sizes="300px"
                    quality={100}
                    className="rounded-full p-4 lg:p-0 hover:cursor-pointer"
                    onClick={handleCounter}
                />
            </div>
            <p className="text-2xl font-bold">My skills:</p>
            <div className="grid grid-cols-5 gap-3 w-full">
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center justify-center hover:text-gray-800 hover:scale-105"
                    >
                        <skill.icon className="text-5xl text-black"/>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Bio