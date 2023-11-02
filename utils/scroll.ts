export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById((e.target as HTMLInputElement).id)
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}