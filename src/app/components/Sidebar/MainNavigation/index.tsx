import { BarChart2, Folder, Home, LayoutDashboard, ListChecks, Users } from "lucide-react";
import { NavItem } from "./NavItem";


export function MainNavigation(){
    return(
        <nav className="space-y-0.5 ">

          <NavItem title="Home" icon={Home}/>
          <NavItem title="Dashboard" icon={LayoutDashboard}/>
          <NavItem title="Projects" icon={Folder}/>
          <NavItem title="Tasks" icon={ListChecks}/>
          <NavItem title="Reporting" icon={BarChart2}/>
          <NavItem title="Users" icon={Users}/>

        </nav>
    )
}