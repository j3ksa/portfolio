import { socials } from "info/socials";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
    return (
        <div className="bg-green-500 w-[90%]">
            <nav className="sm:py-6 sm:px-7 py-5 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="hidden lg:flex items-center">
                        {socials.map(social => (
                            <Link
                                href={social.link}
                                key={social.id}
                            >
                                <social.icon className="text-4xl hover:text-gray-800"/>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-center lg:justify-end lg:hidden">
                        <Menu/>
                    </div>
                    <div className="hidden lg:flex items-center justify-center lg:justify-end">
                        <Link 
                            href={'/bio'}
                            className="bg-white"
                        >
                            <p className="rounded-lg bg-orange-500 px-4 mx-4 py-2 my-2">BIO</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
  
  export default Header
  