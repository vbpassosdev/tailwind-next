import { Search } from "lucide-react";
import { Logo } from "./logo";
import { MainNavigation } from "./MainNavigation";


export function Sidebar(){
    return <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
         <Logo />

         <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm">
            <Search className="h-5 w-5 text-zinc-500" />  
            <input className="flex-1 border-0 gb-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search" />
         </div> 
            
            <MainNavigation></MainNavigation>
       
        </aside>
}
