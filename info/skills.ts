import { Skill } from '@types'
import { TbBrandNextjs, TbBrandReact} from 'react-icons/tb'
import { BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss, BiLogoGit, BiLogoRedux, BiLogoSass, BiLogoDocker, BiLogoGraphql} from 'react-icons/bi'
import { SiJest } from 'react-icons/si'

export const skills: Skill[] = [
    {
        id: 0,
        name: 'Next.js',
        icon: TbBrandNextjs,
        color: 'white',
    },
    {
        id: 1,
        name: 'React',
        icon: TbBrandReact,
        color: '#61DBFB',
    },
    {
        id: 2,
        name: 'javascript',
        icon: BiLogoJavascript,
        color: '#F0DB4F',
    },
    {
        id: 3,
        name: 'typescript',
        icon: BiLogoTypescript,
        color: '#007acc ',
    },
    {
        id: 4,
        name: 'tailwindCSS',
        icon: BiLogoTailwindCss,
        color: '#06b6d4',
    },
    {
        id: 5,
        name: 'Sass',
        icon: BiLogoSass,
        color: '#c69',
    },
    {
        id: 6,
        name: 'Redux',
        icon: BiLogoRedux,
        color: '#00a7e5',
    },
    {
        id: 8,
        name: 'Jest',
        icon: SiJest,
        color: '#C63D14',
    },
    {
        id: 7,
        name: 'GraphQl',
        icon: BiLogoGraphql,
        color: '#e535ab',
    },
    {
        id: 9,
        name: 'Docker',
        icon: BiLogoDocker,
        color: '#0db7ed',
    },
]