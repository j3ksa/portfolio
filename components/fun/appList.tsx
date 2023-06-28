import Image from "next/image"
import Link from "next/link"
import { apps } from "info/apps"

const AppList = (  ) => {

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 to-red-400 space-y-16 w-[80%] rounded-b-[20px] rounded-t-[2px] py-4 h-[600px]">
            <p className="text-xl lg:text-3xl ">Here you can find and play all the games and applications i have prepared</p>
            <div className="space-y-3 mb-8 h-[90%]">
                {apps.map(app => (
                    <Link
                        href={app.link}
                        key={app.id}
                        className="grid grid-cols-2 px-3 py-2"
                    >
                        <Image
                            src={app.img}
                            alt="appImage"
                            width={0}
                            height={0}
                            sizes="300px"
                            quality={100}
                            className="p-4 lg:p-0 hover:cursor-pointer w-[300px] aspect-video object-cover rounded-lg"
                        />
                        <div>
                            <p className="text-xl font-bold">{app.name}</p>
                            <p>{app.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default AppList