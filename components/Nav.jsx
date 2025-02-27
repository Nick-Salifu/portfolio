"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {
                links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500"} font-medium hover:text-blue-500`}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}