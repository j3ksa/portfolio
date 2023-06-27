import { socials } from "info/socials";
import Link from "next/link";
import Menu from "./menu";
import { TabNames } from "interfaces/tabs";
import { Dispatch, SetStateAction } from "react";

interface Props {
    tabName: TabNames
    setTabName: Dispatch<SetStateAction<TabNames>>
}

const Header = ({tabName, setTabName}: Props) => {
    const leftBorder = 'w-[20px] h-[10px] absolute  bottom-0 -left-[20px] rounded-br-[10px] '
    const rightBorder = 'w-[20px] h-[10px] absolute  bottom-0 -right-[20px] rounded-bl-[10px]'

    return (
        <div className="w-[90%]">
            <div className="flex items-center justify-start space-x-[10px] relative ">
                {/* <div className={`hidden lg:flex items-center justify-center rounded-tr-[10px] rounded-tl-[10px] ml-2 px-10 py-[10px] relative min-w-[220px] ${tabName === 'home' ? 'z-10 bg-blue-500' : 'bg-orange-200'}`} onClick={setTabName.bind(this, 'home')}>
                    {socials.map(social => (
                        <Link
                            href={social.link}
                            key={social.id}
                            target="_blank"
                        >
                            <social.icon className="text-4xl text-black hover:text-gray-800 hover:scale-105"/>
                        </Link>
                    ))}
                    <div className={`${tabName !== 'home' ? 'hidden' : rightBorder} shadow-[-10px_0_0_0_rgb(59,130,246)]`} />
                    <div className={`${tabName !== 'home' ? 'hidden' : leftBorder} shadow-[10px_0_0_0_rgb(59,130,246)]`} />
                </div> */}
                <div className={`hidden lg:flex relative hover:cursor-pointer left-2 ${tabName === 'home' && 'z-10'}`} onClick={setTabName.bind(this, 'home')}>
                    <div 
                        className={`${tabName !== 'home' ? 'bg-orange-200' : 'bg-blue-500'} rounded-tr-[10px] rounded-tl-[10px] min-w-[220px]`}
                    >
                        <p className="rounded-sm bg-white px-10 mx-10 py-2 my-2 text-center">Home</p>
                    </div>
                    <div className={`${tabName !== 'home' ? 'hidden' : rightBorder} shadow-[-10px_0_0_0_rgb(59,130,246)]`} />
                    <div className={`${tabName !== 'home' ? 'hidden' : leftBorder} shadow-[10px_0_0_0_rgb(59,130,246)]`} />
                </div>
                <div className={`hidden lg:flex relative hover:cursor-pointer right-8 ${tabName === 'bio' && 'z-10'}`} onClick={setTabName.bind(this, 'bio')}>
                    <div 
                        className={`${tabName !== 'bio' ? 'bg-orange-200' : 'bg-green-500'} rounded-tr-[10px] rounded-tl-[10px] min-w-[220px]`}
                    >
                        <p className="rounded-sm bg-white px-10 mx-10 py-2 my-2 text-center">Bio</p>
                    </div>
                    <div className={`${tabName !== 'bio' ? 'hidden' : rightBorder} shadow-[-10px_0_0_0_rgb(34,197,94)]`} />
                    <div className={`${tabName !== 'bio' ? 'hidden' : leftBorder} shadow-[10px_0_0_0_rgb(34,197,94)]`} />
                </div>
                <div className={`hidden lg:flex relative hover:cursor-pointer right-16 ${tabName === 'games' && 'z-10'}`}  onClick={setTabName.bind(this, 'games')}>
                    <div 
                    className={`${tabName !== 'games' ? 'bg-orange-200' : 'bg-red-500'} rounded-tr-[10px] rounded-tl-[10px] min-w-[220px]`}
                    >
                        <p className="rounded-sm bg-white px-10 mx-10 py-2 my-2 text-center">Games</p>
                    </div>
                    <div className={`${tabName !== 'games' ? 'hidden' : rightBorder} shadow-[-10px_0_0_0_rgb(239,68,68)]`} />
                    <div className={`${tabName !== 'games' ? 'hidden' : leftBorder} shadow-[10px_0_0_0_rgb(239,68,68)]`} />
                </div>
                <div className={`hidden lg:flex relative hover:cursor-pointer right-24 ${tabName === 'projects' && 'z-10'}`}  onClick={setTabName.bind(this, 'projects')}>
                    <div 
                    className={`${tabName !== 'projects' ? 'bg-orange-200' : 'bg-purple-500'} rounded-tr-[10px] rounded-tl-[10px] min-w-[220px]`}
                    >
                        <p className="rounded-sm bg-white px-10 mx-10 py-2 my-2 text-center">Projects</p>
                    </div>
                    <div className={`${tabName !== 'projects' ? 'hidden' : rightBorder} shadow-[-10px_0_0_0_rgb(168,85,247)]`} />
                    <div className={`${tabName !== 'projects' ? 'hidden' : leftBorder} shadow-[10px_0_0_0_rgb(168,85,247)]`} />
                </div>
                <div className="flex items-center justify-center lg:justify-end lg:hidden">
                    <Menu/>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header
  