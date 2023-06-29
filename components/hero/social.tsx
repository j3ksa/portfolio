import Link from "next/link"
import { Socials } from "interfaces/socials"

interface Props {
    info: Socials
}

const Social = ({info}: Props) => {
    return (
        <Link
        href={info.link}
        key={info.id}
        target="_blank"
    >
        <info.icon className="text-5xl text-black hover:text-gray-800 hover:scale-105"/>
    </Link>
    )
}
export default Social