"use client";
import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return(
        <>
            <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 font-medium text-white ${scrolled ? "bg-[#0A0B0B] " : "bg-transparent"}`}>
                <div className="w-full px-15 py-2 flex items-center justify-between cursor-pointer ">
                    <Link href="/">
                        <Image src="/logo.png" alt="ironcore_logo" width={55} height={55} />
                    </Link>
                    <ul className="flex space-x-2 items-center ml-10"> 
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                Home
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                About
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                Programs
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                Membership
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                    Trainers
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                    Blog
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                    Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="#" className="px-5 py-2 text-[12px] rounded-full text-[#0A0A0A] bg-[#55FFCB] font-bold">
                        JOIN NOW
                    </Link>
                    {/* <img src="/logo.png" alt="ironcore_logo" className="w-20 h-20" /> */}
                </div>
                
            </nav>
        </>
    )
}