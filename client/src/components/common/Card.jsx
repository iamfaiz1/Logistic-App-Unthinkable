import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function Card({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'rounded-lg border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5',
        className,
      )}
    >
      {children}
    </motion.section>
  )
}
