import { AiOutlineMenu, AiOutlineLeft } from "react-icons/ai"
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { categories, socials } from "info"
import Link from "next/link"

const Menu = () => {

    return (
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button
                            className="text-3xl text-black flex items-center justify-center space-x-2 cursor-pointer hover:text-gray-700 focus:outline-none bg-white rounded-lg p-2"
                            id="mobile-toggler"
                        >
                            <AiOutlineLeft className={`text-3xl  ${open && 'rotate-180 transform'}`}/>
                            <p>Menu</p>
                        </Popover.Button>
                        <Popover.Overlay

                            className="fixed inset-0 bg-black opacity-30 z-[45]"
                        />
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-300"
                            enterFrom="translate-x-0"
                            enterTo="translate-x-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="translate-x-100"
                            leaveTo="translate-x-0"
                        >
                            <Popover.Panel className="fixed z-50 transform -translate-x-full -right-[50%] lg:-right-[35%] top-0 h-screen w-[50%] lg:w-[35%]">
                                <div className="h-full bg-black shadow  transform transition duration-150 ease-in-out z-50 ">
                                    <p className="text-4xl text-white px-8">Menu</p>
                                    {categories.map(category => (
                                        <Link
                                            href={category.link}
                                            key={category.id}
                                        >
                                            <div className="w-full flex items-center justify-start text-white text-xl py-2 px-8 space-x-2">
                                                <category.icon />
                                                <p>{category.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="w-full flex py-2 px-7 space-x-2">
                                        {socials.map(social => (
                                            <Link
                                                href={social.link}
                                                key={social.id}
                                            >
                                                <social.icon className="text-4xl text-white hover:text-gray-700"/>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
    )
}

export default Menu