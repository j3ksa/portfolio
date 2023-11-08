import { motion } from 'framer-motion'
import { useRef } from 'react'
interface Props {
    children: React.ReactNode
}

export const Reveal = ({ children }: Props) => {
    const ref = useRef(null)

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0,},
                visible: { opacity: 1}
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.25 }}
            style={{ width: '90%'}}
        >
            {children}
        </motion.div>
    )
}

