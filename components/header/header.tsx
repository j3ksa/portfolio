import { socials } from "info/socials";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
    return (
        <div className=" bg-green-500 ">
            <nav className="sm:py-6 sm:px-7 py-5 px-4">
                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        {socials.map(social => (
                            <Link
                                href={social.link}
                                key={social.id}
                            >
                                <social.icon className="text-4xl"/>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className=" font-normal text-2xl leading-6 text-gray-800">My portfolio</h1>
                    </div>
                    <div className="flex items-center justify-end">
                        <Menu/>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
  
  export default Header
  