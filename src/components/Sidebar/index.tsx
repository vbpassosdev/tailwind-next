"use client"

import { Logo } from '@/components/Sidebar/Logo'

import {
  Search,
  CheckSquare,
  Users,
} from 'lucide-react'


import { NavItem } from './NavItem'
import { Profile } from './Profile'
import * as Input from '@/components/Input'


interface SidebarProps {
  activeMenu: string
  onSelectMenu: (menu: string) => void
}


export function Sidebar({ activeMenu, onSelectMenu }: SidebarProps) {


  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>


  <nav className="space-y-0.5">       

 

    <NavItem title="Agenda" icon={CheckSquare} />
    <NavItem title="Financeiro" icon={Users} />
    <NavItem title="Relatórios" icon={Users} />
    <NavItem title="Usuarios" icon={Users} />                
  </nav>


      <div className="mt-auto flex flex-col gap-6">        
        <Profile />
      </div>
     
    </aside>
  )
}
