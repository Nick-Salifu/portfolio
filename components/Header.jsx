import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <header className="py-8 xl:py-12">
            <div className="container mx-auto p-4 flex justify-between items-center">

                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Nick
                        <span className="text-blue-500 ml-1">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}