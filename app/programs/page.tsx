"use client";

import { buttonHoverEffects, scrollLeftEffects, scrollRightEffects, scrollUpDelayEffects, scrollUpEffects, staggerContainer, staggerEffects } from "../animations/animate";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { motion } from 'framer-motion'
import { compareData, prog_intro, programs_det, proven_results } from "./program";
import { useState } from "react";
import { programs } from "../data";
// import { div, span } from "framer-motion/client";
import { FaBolt, FaChevronDown, FaChevronUp, FaUser } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Programs(){
    const [openId, setOpenId] = useState(1);
    const toggleProgram = (id:number) => {
        setOpenId(openId === id ? 0 : id);
    };
    return(
        <>
            <Navbar />
            <Header 
            image="/header/programs.jpg"
            title = "OUR PROGRAMS"
            text="Choose the program that matches your goals and start your transformation today. Every program is designed by certified experts and proven to deliver results."/>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    WHY OUR PROGRAMS WORK
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Science-backed methods combined with expert coaching
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView = "show"
                    viewport= {{ once : false}}
                    className="w-full lg:w-[85%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {prog_intro.map((data) => (
                        <motion.div 
                            variants={staggerEffects}
                            className="px-5 py-8 lg:py-5 flex flex-col items-center w-full border-1 border-[#55FFCB]/20 bg-[#242424] rounded-xl space-y-3 mb-3 lg:mb-0">
                            <span className="w-11 h-11 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                <data.icon />
                            </span>
                            <h3 className="font-semibold text-sm text-white">{data.title}</h3>
                            <p className="text-[13px] text-white/70 text-center">{data.text}</p>
                        </motion.div>  
                    ))}
                </motion.div>
            </div>
            <div className="w-full flex flex-col items-center p-3 lg:p-10 bg-[#242424]">
                <motion.h3 
                    {...scrollUpEffects}
                    className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                        EXPLORE OUR PROGRAMS
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Click any program to see full details, benefits and expected outcomes
                </motion.p>
                <div className="w-full lg:w-[85%] md:p-3 lg:p-5 mt-10 lg:mt-5 flex flex-col space-y-5">
                    {programs_det.map((program) => {
                        const isOpen = openId === program.id;   
                        return(
                            <div key={program.id} className="w-full border-1 border-[#55FFCB]/20 rounded-xl overflow-hidden flex flex-col space-y-5 group">
                                <div 
                                    onClick={() => toggleProgram(program.id)}
                                    className="w-full border-b-1 border-[#55FFCB]/20 cursor-pointer rounded-t-xl flex px-2 md:px-5 py-3 items-center justify-between">
                                    <div className="flex space-x-3 items-center px-3">
                                        <span className="w-10 h-10 rounded-full flex items-center justify-center text-[#55FFCB] bg-[#33554B]">{program.id}</span>
                                        <h3 className="font-bold text-white heading group-hover:text-[#55FFCB] transition-all duration-300">{program.title}</h3>
                                    </div>
                                    <div className="text-[#55FFCB] text-md hover:text-white transition-all duration-200">
                                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>
                                {isOpen && (
                                    <motion.div 
                                        {...scrollUpEffects}
                                        className="w-full p-3 lg:p-5 lg:flex lg:flex-row justify-evenly rounded-b-xl">
                                        <motion.img 
                                            {...scrollLeftEffects}
                                            src={program.image} alt={program.title} className="w-full lg:w-[35%] h-[250px] md:h-[400px] lg:h-auto rounded-xl object-cover" />
                                        <div className="w-full lg:w-[60%] h-auto flex flex-col lg:px-5 mt-5 lg:mt-0">
                                            <h3 className="text-[13px] text-white/70">
                                                {program.text}
                                            </h3>
                                            <h3 className="text-[#55FFCB] font-semibold mt-5 text-sm">Who It's For:</h3>
                                            <div className="mt-3 w-full grid grid-cols-2 md:grid-cols-2 gap-3">
                                                {program.category.map((category) => (
                                                    <span className="flex space-x-2 items-center">
                                                        <LuUser  className="w-3 h-3 text-[#55FFCB]"/>
                                                        <p className="text-[11px] text-white/60">{category}</p>
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-[#55FFCB] font-semibold mt-5 text-sm">Key Benefits:</h3>
                                            <div className="mt-3 w-full grid grid-cols-2 md:grid-cols-2 gap-3">
                                                {program.benefits.map((benefits) => (
                                                    <span className="flex space-x-2 items-center">
                                                        <FaCircleCheck  className="w-3 h-3 text-[#55FFCB]"/>
                                                        <p className="text-[11px] text-white/60">{benefits}</p>
                                                    </span>
                                                ))}
                                            </div>
                                            <div className=" mt-7 w-full py-2 px-4 border-l-2  rounded-r-lg border-[#55FFCB] bg-[#33554B] flex flex-col space-y-2">
                                                <h3 className="font-semibold text-[12px] text-white">Expected Outcomes:</h3>
                                                <p className="text-[10px] md:text-[11px] text-white/60">{program.result}</p>
                                            </div>
                                            <motion.div 
                                                {...scrollRightEffects}
                                                className="w-auto flex space-x-5 items-center mt-5">
                                                <motion.button 
                                                {...buttonHoverEffects}
                                                className="hover:shadow-[0_0_30px_rgba(85,255,203,0.2)] cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[11px]">
                                                    Get Started
                                                </motion.button>
                                                <motion.button 
                                                {...buttonHoverEffects}
                                                className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[11px] border-2 border-[#55FFCB]">
                                                    Ask Questions
                                                </motion.button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    PROGRAM COMPARISM
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Compare features to find the perfect programs for your goals.
                </motion.p>
                <div className="w-full lg:w-[85%] p-3 md:p-5 mt-5 flex items-center justify-center">
                    <div className="w-full border-1 border-[#55FFCB]/20 overflow-hidden rounded-xl">
                        <div className="w-full py-3.5 px-3 md:px-6 grid grid-cols-4 bg-[#35574D] text-white text-[11px] md:text-sm font-bold rounded-t-xl">
                            <span>Feature</span>
                            <span>Personal Training</span>
                            <span>Group Classes</span>
                            <span>Specialized Programs</span>
                        </div>
                        {compareData.map((data, index) => (
                            <div key={index} className="py-4 px-3 md:px-6 grid grid-cols-4 border-t border-[#55FFCB]/10 bg-[#1A1A1A] text-sm">
                                <span className="text-[12px] text-white/60">{data.feature}</span>
                                <span className="flex justify-center md:mr-25">{data.personal ? (
                                    <FaCircleCheck className="text-[#55FFCB] text-sm text-center" />
                                ) : (
                                    <IoCloseCircleOutline  className="text-gray-500"/>
                                )}
                                </span>
                                <span className="flex justify-center md:mr-25">{data.group ? (
                                    <FaCircleCheck className="text-[#55FFCB] text-sm text-center" />
                                ) : (
                                    <IoCloseCircleOutline  className="text-gray-500"/>
                                )}
                                </span>
                                <span className="flex justify-center md:mr-25">{data.specialized ? (
                                    <FaCircleCheck className="text-[#55FFCB] text-sm text-center" />
                                ) : (
                                    <IoCloseCircleOutline  className="text-gray-500"/>
                                )}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#242424]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    PROVEN RESULTS
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Real numbers from real members
                </motion.p>
                <div className="w-full lg:w-[75%] p-5 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {proven_results.map((result) => (
                        <div className="flex flex-col items-center space-y-2 mb-3 md:mb-0">
                            <motion.h3 
                                {...scrollUpDelayEffects}
                                className="font-bold heading text-[#55FFCB] text-3xl">{result.value}</motion.h3>
                            <motion.p 
                                {...scrollUpEffects}
                                className="text-[12px] text-white/70 font-medium">{result.text}</motion.p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center">
                <motion.h3 
                    {...scrollUpEffects}
                    className="mt-10 heading font-bold text-white text-2xl md:text-3xl text-center">NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?</motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                    Book a free consultation with one of our experts trainers. We'll assess your goals, fitness level, and preferences to recommend the perfect program for your transformation.
                </motion.p>
                <motion.div 
                    {...scrollRightEffects}
                    className="w-auto md:flex md:flex-row flex flex-col md:space-x-5 space-y-5 md:space-y-0 items-center mt-5">
                    <motion.button 
                    {...buttonHoverEffects}
                    className="cursor-pointer px-10 md:px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
                        Book Free Consultation
                    </motion.button>
                    <motion.button 
                    {...buttonHoverEffects}
                    className="cursor-pointer px-10 md:px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
                        View Membership Plans
                    </motion.button>
                </motion.div>
            </div>
            <Footer />
        </>
    )
}