"use client";

interface HeaderProps {
    title : string,
    text : string,
    image : string
}

import { motion } from 'framer-motion'
import { scrollUpDelayEffects, secFadeInEffects } from '../animations/animate';
export default function Header({title, text, image} : HeaderProps){
    return (
        <>
            <div className="w-full relative h-100 relative">
                <img src={image} alt="header image" className="w-full h-full object-cover" />
                <div className="-full h-full absolute top-0 left-0 inset-0 bg-[#0A0B0B]/70 flex flex-col items-center justify-center">
                    <motion.h3 
                        {...secFadeInEffects}
                        className=" mt-5 text-3xl md:text-4xl lg:text-5xl font-bold heading text-white ">
                        {title}
                    </motion.h3>
                    <motion.p 
                        {...scrollUpDelayEffects}
                        className="hidden md:flex w-[85%] md:w-[75%] lg:w-[55%] text-center mt-5 text-sm md:text-base text-white/80">
                        {text}
                    </motion.p>
                </div>
            </div>
        </>
    )
}