import Auction from 'public/projects/auction.png'
import Banach from 'public/projects/banachLanding.png'
import Diamond from 'public/projects/diamond.png'
import KupBSV from 'public/projects/kupBsv.png'
import PayBSV from 'public/projects/PayBsv.png'
import Pondemia from 'public/projects/pondemia.png'
import Soundoshi from 'public/projects/soundoshi.png'
import Varomax from 'public/projects/varomax.png'
import Guestline from 'public/projects/guestline.png'
import GigaClear from 'public/projects/gigaclear.png'
import BanachLogo from 'public/logos/banachLogo.png'
import SoundoshiLogo from 'public/logos/soundhoshiLogo.svg'
import { Job } from '@types'

export const jobs: Job[] = [
    {
        id: 'freelance',
        name: 'Freelance',
        color: 'green.300',
        description: `
            Welcome to my comprehensive portfolio, where I proudly present my extensive journey as a freelance Frontend Developer with over three years of hands-on experience in the field.  \n
            My specialization lies in the creation of captivating one-page websites using React and Next.js. \n
            This portfolio serves as a testament to my expertise, creativity, and unwavering commitment to crafting visually stunning, responsive, and high-performance web solutions that leave a lasting impression. \n
        `,
        monthsInWork: 4,
        projects: [
            {
                id: 'varomax',
                name: 'Varomax',
                image: Varomax,
                link: 'https://www.varomax.pl/',
            },
            {
                id: 'diamond',
                name: 'Diamond Fleet',
                image: Diamond,
                link: 'https://www.diamondfleet.pl/',
            },
            {
                id: 'hotels',
                name: 'Hotels',
                image: Guestline,
                link: 'https://hotels-j3ksa.vercel.app/',
            },
            {
                id: 'gigaclear',
                name: 'Gigaclear Code Challenge',
                image: GigaClear,
                link: 'https://gigaclear-code-challenge.vercel.app/',
            },
        ]
    },
    {
        id: 'banach',
        name: 'Banach Group',
        image: BanachLogo,
        color: 'white',
        description: `
            My work as a React Front-end developer for a Banach Group, building web applications related to blockchain, was filled with challenges and opportunities for development. \n
            I had the opportunity to work on various projects, designing user interfaces, creating prototypes, and developing React components. I actively participated in our team meetings where we discussed project details and collectively solved technical problems. \n
            Throughout the year, I gained increasing knowledge about blockchain and its applications. My work involved creating applications that enabled users to interact with crypto, providing me with the opportunity to work on innovative solutions. \n
            Working as a programmer in such an environment not only developed my technical skills but also required continuous learning, adapting to the dynamic blockchain market, and collaborating with my team to create innovative web applications. It was a fascinating and satisfying professional journey. \n
        `,
        monthsInWork: 8,
        projects: [
            {
                id: 'szyfr',
                name: 'WieszCzemuMówiSięTuSzyfrem',
                image: Pondemia,
                link: 'https://landingpono.vercel.app/',
            },
            {
                id: 'banach',
                name: 'BanachGroup',
                image: Banach,
                link: 'https://landingbanach.vercel.app/en',
            },
            {
                id: 'kup',
                name: 'KupBSV',
                image: KupBSV,
                link: 'https://kupbsv.vercel.app/wie',
            },
            {
                id: 'pay',
                name: 'PayBSV',
                image: PayBSV,
                link: 'https://paybsv.vercel.app/',
            },
        ]
    },
    {
        id: 'soundoshi',
        name: 'Soundoshi',
        image: SoundoshiLogo,
        color: '#F16564',
        description: `
            Those were incredible two years during which I was not only a React developer but also a co-founder and programmer responsible for the development of the music application called "Soundoshi." Our journey began in October 2021 when the dream of creating an innovative music platform became a reality. \n
            At the outset, we had only a vision. We wanted to create a place where musicians and fans could connect and make music together, regardless of their geographic location. Using Next.js for the past years, I knew that this technology was the perfect tool for creating interactive user interfaces. \n
            Over this two-year period, we continuously improved our application. I was responsible for developing the front-end, adding new features, improving performance, and adjusting the user interface to the changing needs of our users. \n
            During these two years, I experienced many challenges and successes. I was a React developer, but also a co-founder of something that had the potential to change the way people create and experience music online. This experience taught me that combining passion with programming skills can truly yield revolutionary results. \n
        `,
        monthsInWork: 24,
        projects: [
            {
                id: 'soundoshi',
                name: 'Soundoshi',
                image: Soundoshi,
                link: 'https://www.soundoshi.com/',
            },
            {
                id: 'auction',
                name: 'Auction',
                image: Auction,
                link: 'https://pray-for-ukraine.vercel.app/buy',
            },
        ]
    },
]