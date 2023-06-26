import Image from "next/image"

const Hero = () => {
    let counter = 0
    const increaseCounter = () => {
        counter = counter + 1
        console.log(counter)
        
    }
    const changeImage = counter >= 9
    
    return (
        <div className="flex flex-col items-center justify-center bg-green-500 space-y-16 w-[90%]">
            <p className="text-xl lg:text-5xl">Welcome to my code cave</p>
            <p className="text-lg lg:text-xl">Feel free to explore</p>
            <Image
                src={changeImage ? "/assets/sauronEye.jpg" : "/assets/cave.png"}
                alt="myFace"
                width={300}
                height={300}
                sizes="300px"
                quality={100}
                className="rounded-full p-4 lg:p-0"
                onClick={increaseCounter}
            />
        </div>
    )
}
export default Hero