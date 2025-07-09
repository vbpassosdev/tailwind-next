import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export interface NavItemProps {
  title: string
  icon: ElementType
  active?: boolean
  onClick?: () => void
}

export function NavItem({ title, icon: Icon, active, onClick }: NavItemProps) {
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        if (onClick) onClick()
      }}
      className={`group flex items-center gap-3 rounded px-3 py-2 ${
        active
          ? 'bg-violet-100 text-violet-700'
          : 'text-zinc-700 hover:bg-violet-50 hover:text-violet-500'
      }`}
    >
      <Icon className={`h-5 w-5 ${active ? 'text-violet-700' : 'text-zinc-500 group-hover:text-violet-500'}`} />
      <span className="font-medium">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
