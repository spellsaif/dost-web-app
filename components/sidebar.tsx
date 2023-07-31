"use client";

import { cn } from "@/lib/utils";
import { Home, Settings, PlusCircle } from "lucide-react";
import Link from "next/link";
import {usePathname} from 'next/navigation'



const Sidebar = () => {
    const pathname = usePathname()
    const routes = [
        {
            href: '/',
            label: 'Home',
            icon: Home
        },

        {
            href: '/create',
            label: 'Create',
            icon: PlusCircle
        },
        {
            href: '/settings',
            label: 'Settings',
            icon: Settings
        }
    ]
    return ( 
        <section className="bg-secondary/50 w-24 py-4">
            <div className="w-full flex flex-col items-center">
                {
                routes.map(({href, label, icon: Icon}) => (
                    <Link key={href} href={href} className={cn("flex flex-col items-center rounded mt-2 w-20  py-2 hover:bg-primary/10", pathname === href ? "bg-primary/10": "")}>
                        <Icon />
                        {label}
                    </Link>
                ))
                }
            </div>
        </section>
     );
}
 
export default Sidebar;