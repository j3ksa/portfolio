export const scroll = (id: string, refs: React.MutableRefObject<HTMLDivElement>[]) => {
    const correctRef = refs.find(ref => ref.current.id === id)
    setTimeout(() => {
        correctRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100)
};