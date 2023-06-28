import Image from "next/image"
import Link from "next/link"
import { Projects } from "interfaces/projects"

interface Props {
    info: Projects
}

const Project = ({info}: Props) => {
    return (
        <Link
        href={info.link}
        key={info.id}
        target="_blank"
        className="grid grid-cols-2 px-3 py-2"
    >
        <Image
            src={info.img}
            alt="projectImage"
            width={0}
            height={0}
            sizes="300px"
            quality={100}
            className="p-4 lg:p-0 hover:cursor-pointer w-[300px] aspect-video object-cover rounded-lg"
        />
        <div>
            <p className="text-xl font-bold">{info.name}</p>
            <p>{info.desc}</p>
        </div>

    </Link>
    )
}

export default Project