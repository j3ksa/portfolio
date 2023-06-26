import { BiGame, BiBookOpen } from "react-icons/bi"
import { BsPersonWorkspace } from "react-icons/bs"

export const categories = [
    {
        id: '0',
        name: 'Games',
        icon: BiGame,
        link: '/games'
    },
    {
        id: '1',
        name: 'Bio',
        icon: BiBookOpen,
        link: '/bio'
    },
    {
        id: '2',
        name: 'Projects',
        icon: BsPersonWorkspace,
        link: '/projects'
    },
]