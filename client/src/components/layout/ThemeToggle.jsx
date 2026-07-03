import { Moon, Sun } from 'lucide-react'
import Button from '../common/Button'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <Button type="button" variant="ghost" className="px-3" onClick={toggleTheme} aria-label="Toggle theme">
      <Icon className="h-5 w-5" />
    </Button>
  )
}
