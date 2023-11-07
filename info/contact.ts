import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"
import { Contact } from "@types"

export const contacts: Contact[] = [
    {
        id: 'linked',
        link: 'https://www.linkedin.com/in/łukasz-jęksa/',
        icon: AiOutlineLinkedin,
        color: '#0e76a8',
        text: 'Reach out on'
    },
    {
        id: 'github',
        link: 'https://github.com/j3ksa',
        icon: AiOutlineGithub,
        color: '#e8eaea',
        text: 'Check out my'
    },
    {
        id: 'mail',
        link: 'mailto: lukasz@j3ksa.icu',
        icon: AiOutlineMail,
        color: 'white',
        text: 'Email me at',
        text2: 'lukasz@j3ksa.icu',
        text3: 'or'
    },
]