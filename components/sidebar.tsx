"use client";

import { cn } from "@/lib/utils";
import { Home, Settings, PlusCircle } from "lucide-react";
import Image from "next/image";
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
        <section className="bg-secondary/50 w-24 py-6 flex flex-col items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={60} height={60} />
            </Link>
            <div className="w-full flex flex-col items-center mt-16">
                {
                routes.map(({href, label, icon: Icon}) => (
                    <Link key={href} href={href} className={cn("flex flex-col items-center rounded mt-4 w-20  py-2 hover:bg-primary/10", pathname === href ? "bg-primary/10": "")}>
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