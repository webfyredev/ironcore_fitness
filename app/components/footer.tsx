"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from 'framer-motion'
import { buttonHoverEffects } from "../animations/animate";
export default function Footer(){
    const date = new Date().getFullYear();
    const social = [
        {
            icon : FaFacebook,
            link : ''
        },
        {
            icon : FaInstagram,
            link : ''
        },
        {
            icon : SiX,
            link : ''
        },
        {
            icon : FaYoutube,
            link : ''
        }
    ]
    return(
        <>
            <footer className="w-full py-5 lg:px-5 bg-[#0A0A0A] flex flex-col">
                <div className="w-full lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 flex flex-col">
                        <Link href="/">
                            <Image src="/logo.png" alt="ironcore_logo" width={55} height={55} />
                        </Link>
                        <p className="text-[12px] mt-4 text-white/80">Transform your body and unlock your strength with elite training programs and certified coaches.</p>
                    </div>
                    <div className="p-5 flex flex-col">
                        <h3 className=" font-semibold text-[#55FFCB]">Stay Updated</h3>
                        <p className="text-[12px] mt-2 text-white/80">Get fitness tips and exclusive offers</p>
                        <form action="" className="w-full py-2.5">
                            <input type="email" placeholder="Your email" className="text-white/80 bg-[#2A2A2A] w-full h-10 lg:h-8 text-[12px] px-3 rounded-md border-1 border-[#55FFCB]/20"  />
                            <motion.button {...buttonHoverEffects} className="w-full h-10 lg:h-9 mt-3 lg:mt-2 rounded-md font-semibold cursor-pointer bg-[#55FFCB] text-[12px] text-[#0A0A0A]">Subscribe</motion.button>
                        </form>
                    </div>
                    <div className="p-5 flex flex-col">
                        <h3 className=" font-semibold text-[#55FFCB]">Quick Links</h3>
                        <ul className="flex flex-col space-y-4 mt-2.5">
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/programs">
                                    Programs
                                </Link>
                            </li>
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/membership">
                                    Membership
                                </Link>
                            </li>
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/trainers">
                                    Our Trainers
                                </Link>
                            </li>
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="text-[12px] text-white/80 hover:text-white hover:font-medium transition-all duration-200">
                                <Link href="/contact">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-5">
                        <h3 className=" font-semibold text-[#55FFCB]">Follow Us</h3>
                        <div className="flex space-x-3 mt-3">
                            {social.map((data) => (
                                <a href={data.link} className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2A2A2A] text-white hover:bg-transparent transition-all duration-300 hover:border-1 hover:border-[#55FFCB]/20">
                                    <data.icon />
                                </a>
                                
                            ))}
                        </div>
                    </div>
                </div>
                <span className="mt-5 w-full border-1 border-[#55FFCB]/10"></span>
                <div className="md:flex md:flex-row flex flex-col space-y-3 md:space-y-0 items-center md:justify-between mt-3 px-2 md:px-10">
                    <p className="text-[12px] mt-2 text-white/80">&copy; {date} IronCore Fitness. All right reserved.</p>
                    <div className="flex space-x-4">
                        <a href="" className="text-[12px] text-white/80 hover:text-[#55FFCB] transition-all">Privacy Policy</a>
                        <a href="" className="text-[12px] text-white/80 hover:text-[#55FFCB] transition-all">Terms of Service</a>
                        <a href="mailto:oyinbook@gmail.com" className="text-[12px] text-white/80 hover:text-[#55FFCB] transition-all">Developed by Oyinlade</a>

                    </div>
                </div>
            </footer>
        </>
    )
}