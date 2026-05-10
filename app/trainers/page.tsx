"use client";

import { FaAward, FaMedal, FaStar } from "react-icons/fa";
import { buttonHoverEffects, scrollRightEffects, scrollUpDelayEffects, scrollUpEffects, staggerContainer, staggerEffects } from "../animations/animate";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { coaching_team, feedbacks, train_stats, trainer_value } from "./trainers";
import { motion } from 'framer-motion'
import { FaCircleCheck } from "react-icons/fa6";

export default function Trainers(){
    return(
        <>
            <Navbar />
            <Header 
            title="MEET OUR EXPERT TEAM"
            text="World-class coaches dedicated to your transformation. Each trainer brings unique expertise, advanced certifications, and a genuine passion for helping you succeed."/>
            <div className="bg-[#55FFCB] w-full p-5 lg:px-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {train_stats.map((data, index) => (
                    <div key={index} className="p-3 lg:p-5 flex flex-col items-center">
                        <motion.h3 
                            {...scrollUpDelayEffects}
                            className="font-bold heading text-3xl text-[#0A0B0B]">{data.value}
                        </motion.h3>
                        <motion.p 
                            {...scrollUpEffects}
                            className="text-[10px] lg:text-[11px] text-[#0A0B0B] font-semibold mt-2 text-center">
                            {data.text}
                        </motion.p>
                    </div>
                ))}
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#242424]">
                <motion.h3 
                    {...scrollUpEffects}
                    className="font-bold text-white heading text-2xl mt-10 lg:mt-5 text-center">WORLD-CLASS EXPERTISE, PERSONALIZED ATTENTION</motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-full md:w-[85%] lg:w-[55%] text-[12px] md:text-[14px] text-white/70 mt-5 text-center">Our coaching team represents the best in the fitness industry. With over 60years of combined experience and 50+ advanced certifications, they bring both scientific knowledge and real-world expertise to every session.</motion.p>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-full md:w-[85%] lg:w-[55%] text-[14px] text-white/70 mb-5 lg:mb-0 mt-5 text-center">But credentials are just the beginning. What truly sets our trainers apart is their genuine passion for helping people transform their lives. They dont just coach they inspire, motivate and support you every step of the way.</motion.p>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    OUR COACHING TEAM
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Get to know the experts who will guide your transformation
                </motion.p>
                <div className="w-full mt-5 p-3 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {coaching_team.map((team, index) => (
                        <div className="w-full border-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 rounded-xl flex flex-col relative group overflow-hidden mb-5 transition-all ">
                            <img src={team.image} alt={team.name} className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300" />
                            <span className="absolute w-full top-0 h-48 inset-0 bg-[#0A0B0B]/20 group-hover:bg-[#0A0B0B]/5 transition-all duration-300 rounded-t-xl group-hover:h-49.5">
                                <p className="absolute right-5 top-2 bg-[#55FFCB] text-[#0A0B0B] text-[10px] px-3 py-1 rounded-full font-semibold ">{team.years} years</p>
                            </span>
                            <div className="rounded-b-xl w-full h-full p-5 bg-[#2A2A2A] flex flex-col">
                                <h3 className="font-semibold text-white text-lg group-hover:text-[#55FFCB] transition-all duration-300">
                                    {team.name}
                                </h3>
                                <p className="text-[12px] text-[#55FFCB]">
                                    {team.role}
                                </p>
                                <span className="mt-4 flex items-center text-[11px] text-white/70">
                                    <FaAward  className="text-[#55FFCB] mr-1"/>
                                    {team.award}
                                </span>
                                <h3 className="text-white font-medium text-[12px] mt-3">Specialities:</h3>
                                <span className="w-full flex space-x-2.5 mt-3">
                                    {team.specialities.map((speciality) => (
                                        <p className="w-auto flex items-center text-center px-3 py-1 text-[10px] border-1 border-[#55FFCB]/10 rounded-full font-medium text-[#55FFCB] bg-[#33554B]">{speciality}</p>
                                    ))}
                                </span>
                                <p className="text-white/70 text-[12px] mt-4">
                                    {team.info}
                                </p>
                                <ul className="flex flex-col space-y-3 mt-4">
                                    {team.process.map((process) => (
                                        <li className="flex items-center text-[10px] text-white/60"><FaCircleCheck  className="w-2.5 h-2.5 text-[#55FFCB] mr-2"/> {process}</li>
                                    ))}
                                </ul>
                                <button className="w-full p-3 cursor-pointer border-2 text-[#55FFCB] font-medium border-[#55FFCB] hover:bg-[#55FFCB] hover:text-[#0A0B0B] hover:border-none rounded-full mt-5 text-sm transition-all duration-300">
                                    Book a Session
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#242424]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-2xl md:text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    WHY OUR TRAINERS ARE DIFFERENT
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        More than just coaches they're your partners in transformation
                </motion.p>
                <div className="w-full lg:w-[85%] mt-5 p-3 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {trainer_value.map((trainer, index) => (
                        <motion.div 
                            {...scrollUpEffects}
                            className="p-5 border-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 rounded-xl flex flex-row space-x-5 bg-[#2A2A2A] mb-3 transition-all hover:bg-[#242424] duration-300">
                            <span className="w-11 h-10.5 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                <trainer.icon />
                            </span>
                            <div className="w-[80%] lg:w-[90%] flex flex-col">
                                <h3 className="text-white font-semibold ">{trainer.title}</h3>
                                <p className="mt-2 text-white/70 text-[12px]">{trainer.text}</p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-2xl md:text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    WHAT MEMBERS SAY ABOUT OUR TRAINERS
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Real feedbacks from real members
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="w-full lg:w-[85%] mt-5 p-3 lg:p-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    {feedbacks.map((results) => (
                        <motion.div 
                            variants={staggerEffects}
                            className="w-full p-5 border-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 bg-[#2A2A2A] mb-3 lg:mb-0 flex flex-col rounded-xl transition-all duration-300">
                            <div className="flex gap-1 mb-6 text-[#55FFCB]">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-[13px] italic text-white/60">
                                "{results.results}""
                            </p>
                            <span className="mt-5 w-full border-1 border-[#55FFCB]/10"></span>
                            <h3 className="text-[12px] font-medium text-white mt-4">{results.member}</h3>
                            <p className="text-[11px] font-medium text-[#55FFCB]">{results.process}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="w-full p-5 md:p-10 lg:p-15 bg-[#242424] flex flex-col items-center">
                <motion.h3 
                {...scrollUpEffects}
                className="text-2xl md:text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    READY TO WORK WITH OUR EXPERT TEAM
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Connect with one of our world-class trainers and begin your transformation journey today. Book a free consultation to meet your perfect coach match.
                </motion.p>
                <motion.div 
                    {...scrollRightEffects}
                    className="w-auto md:flex md:flex-row md:space-x-5 space-y-5 md:space-y-0 flex flex-col items-center justify-center mt-5">
                    <motion.button 
                        {...buttonHoverEffects}
                        className="cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
                        Book Free Consultation
                    </motion.button>
                    <motion.button 
                        {...buttonHoverEffects}
                        className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
                            View Membership Plans
                    </motion.button>
                </motion.div>
            </div>
            <Footer />
        </>
    )
}