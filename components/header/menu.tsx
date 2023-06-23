import { AiOutlineMenu } from "react-icons/ai"
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Menu = () => {

    return (
            <Popover>
            {({ close }) => (
                <>
                    <Popover.Button
                        className="text-3xl text-black flex items-center justify-center cursor-pointer"
                        id="mobile-toggler"
                    >
                        <AiOutlineMenu className="text-3xl"/>
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
                        <Popover.Panel className="fixed z-50 transform -translate-x-full -right-[50%] top-0 h-screen w-[35%] min-w-36">
                        <div className="h-full bg-black shadow  transform transition duration-150 ease-in-out z-50 ">

                        </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
            </Popover>
    )
}

export default Menu