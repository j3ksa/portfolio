export const smoothScroll = (e: React.MutableRefObject<HTMLDivElement>) => {
    e.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}