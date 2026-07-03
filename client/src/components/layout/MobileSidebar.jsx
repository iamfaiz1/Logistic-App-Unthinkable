import { Menu } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../common/Button'
import Sidebar from './Sidebar'

export default function MobileSidebar({ role }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="ghost" className="px-3 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div className="h-full w-72" initial={{ x: -288 }} animate={{ x: 0 }} exit={{ x: -288 }} onClick={(event) => event.stopPropagation()}>
              <Sidebar role={role} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
