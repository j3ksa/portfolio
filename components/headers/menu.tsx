import { Dialog, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { categories, socials } from "info"
import Link from "next/link"
import { Dispatch, SetStateAction, MouseEvent, MutableRefObject } from "react";

interface Props {
    setTabName: Dispatch<SetStateAction<string>>
}

const Menu = ({setTabName}: Props) => {

    const handleCLick = (element: string, func: (focusableElement?: HTMLElement | MouseEvent<HTMLElement, globalThis.MouseEvent> | MutableRefObject<HTMLElement>) => void) => {
        setTabName(element)
        func()
    }

    return (
            <Popover>
                {({ close }) => (
                    <>
                        <Popover.Button
                            className="text-3xl text-black relative flex items-center justify-center space-x-2 cursor-pointer hover:text-gray-700 bg-orange-300 focus:outline-none w-full p-2"
                            id="mobile-toggler"
                        >
                            <p className="rounded-sm bg-white px-10 mx-10 py-2 my-2 text-center font-semibold">Menu</p>
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
                                <div className="h-full bg-black shadow transform transition duration-150 ease-in-out z-50 flex flex-col justify-between">
                                    <div>
                                        <p className="text-4xl text-white px-8 pb-2">Menu</p>
                                        {categories.map(category => (
                                            <div 
                                                key={category.id} 
                                                className="w-full flex items-center justify-start text-white text-xl py-2 px-8 space-x-2 cursor-pointer"
                                                onClick={() => handleCLick(category.name.toLowerCase(), close)}
                                            >
                                                <category.icon />
                                                <p>{category.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full flex py-2 px-7 space-x-2 justify-center">
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