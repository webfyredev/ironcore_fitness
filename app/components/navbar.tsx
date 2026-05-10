"use client";
import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    const [Open, setOpen] = useState(false)
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
                <div className="w-full px-5 lg:px-15 py-2 flex items-center justify-between cursor-pointer ">
                    <Link href="/">
                        <Image src="/logo.png" alt="ironcore_logo" width={55} height={55} />
                    </Link>
                    <ul className="hidden lg:flex space-x-2 items-center ml-10"> 
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/programs">
                                Programs
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/membership">
                                Membership
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/trainers">
                                    Trainers
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="">
                                    Blog
                            </Link>
                        </li>
                        <li className={`font-medium hover:font-semibold px-3 py-1.5 text-[12.5px] cursor-pointer transition-all duration-200 text-white hover:text-[#55FFCB] hover:underline`}>
                            <Link href="/contact">
                                    Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="#" className="hidden lg:flex px-5 py-2 text-[12px] rounded-full text-[#0A0A0A] bg-[#55FFCB] font-bold">
                        JOIN NOW
                    </Link>
                    <button onClick={() => setOpen(!Open)}
                    className="flex flex-col justify-center items-center gap-1.5 lg:hidden cursor-pointer"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "-rotate-45 -translate-y-2" : ""}`}></span>

                </button>
                    {/* <img src="/logo.png" alt="ironcore_logo" className="w-20 h-20" /> */}
                </div>
                
            </nav>
            <div className={`py-3 px-5 fixed z-50 lg:hidden top-17 left-0 w-full h-auto bg-[#0A0A0F]/95 backdrop-blur-lg flex flex-col space-y-2.5 transition-all duration-300 ${Open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link href="/" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Home
                </Link>
                <Link href="/about" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    About
                </Link>
                <Link href="/programs" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Programs
                </Link>
                <Link href="/membership" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Membership 
                </Link>
                <Link href="/trainers" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Trainers
                </Link>
                <Link href="#" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Blog
                </Link>
                <Link href="/contact" className="px-2 py-2.5 rounded-lg cusor-pointer text-[12.5px] text-[#A1A1AA] hover:text-[#55FFCB]">
                    Contacts
                </Link>
                <button className="border-none flex items-center justify-center mt-5 py-3 text-[12.5px] font-semibold rounded-lg cursor-pointer bg-[#55FFCB] text-[#0A0B0B] transition-all hover:bg-transparent hover:text-[#55FFCB] hover:border-1 hover:border-[#55FFCB]/20">
                    JOIN NOW 
                </button>
            </div>
        </>
    )
}