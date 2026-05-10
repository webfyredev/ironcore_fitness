"use client";

import { FaCircleCheck } from "react-icons/fa6";
import { buttonHoverEffects, scrollLeftEffects, scrollRightEffects, scrollUpDelayEffects, scrollUpEffects, secFadeInEffects, staggerContainer, staggerEffects } from "../animations/animate";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { choose, facilities, principles, values } from "./about";
import { motion } from 'framer-motion'

export default function About(){
    return (
        <>
            <Navbar />
            <Header 
                title = "ABOUT IRONCORE FITNESS"
                text="More than a gym, we're community dedicated to transforming lives through fitness, discipline, and unwavering support "
            />
            <div className="bg-[#55FFCB] w-full p-5 lg:px-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {values.map((data, index) => (
                    <div className="p-5 flex flex-col items-center">
                        <motion.h3 
                            {...scrollUpDelayEffects}
                            className="font-bold heading text-3xl text-[#0A0B0B]">{data.value}
                        </motion.h3>
                        <motion.p 
                            {...scrollUpEffects}
                            className="text-[11px] text-[#0A0B0B] font-semibold mt-2">
                            {data.text}
                        </motion.p>
                    </div>
                ))}
            </div>
            <div className="w-full p-3 lg:p-10 lg:flex lg:flex-row flex flex-col  lg:space-x-10 bg-[#2A2A2A]">
                <div className="w-full lg:w-1/2 p-2 lg:p-5 flex flex-col">
                    <motion.h3 
                        {...scrollUpEffects}
                        className="text-white font-bold text-3xl heading mt-10 lg:mt-10">
                        OUR STORY
                    </motion.h3>
                    <div className="flex flex-col space-y-4 mt-5 text-[13px] text-white/80">
                        <motion.p
                            {...scrollUpDelayEffects}
                        >
                            
                            IronCore Fitness was born from a simple observation: most gyms were either intimidating bodybuilding
                            dungeons or overcrowded cooperate facilities that treated members like numbers. We knew there had to be a better way.
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                            >
                            In 2020, our founder a former competitive atthlete and certified strength coach opened the doors to IronCore with a revolutionary
                            vision: create a space where everyone, regardless of fitness level , could feel welcomed, supported, and empowered to transform their lives
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                            >
                            What started a 5,000 square facility with a handful of members had grown a 15000 square of foot training center serving over 2000 active members.
                            But despite our growth, our core missionremains unchanged: provide expert coaching, proven programs, and supportive community that helps people achive results they never thought possible.
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                            >
                            Today IronCore Fitness stands as a testament to what happens when passion meets purpose. Our team of 15+ certified trainers bring decades of combined experience.
                            Our members range from complete beginners taking there first steps toward fitness to competitive athletespushing the limits of human performance. And our 10,000+ success stories proves that with the right guidance, support and environment, anyone can transform their body and life. 
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-2 lg:p-5 flex items-center justify-center relative mt-5 lg:mt-0">
                    <motion.img 
                        {...scrollRightEffects}
                        src="/about/intro.jpg" alt="intro_image" className="w-full lg:w-[85%] h-auto md:h-[350px]  lg:h-[75%] object-cover rounded-xl" />
                    <motion.div 
                        {...secFadeInEffects}
                        className="absolute bottom-7 left-[-10px] p-5 border-2 bg-[#2A2A2A] border-[#55FFCB] rounded-xl hidden lg:flex flex-col">
                        <h3 className="text-xl font-bold heading text-[#55FFCB]">
                            11 YEARS
                        </h3>
                        <p className="text-[12px] text-white/80 mt-1">
                            Transform Lives
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="w-full p-3 lg:p-15 flex flex-col items-center bg-[#0A0B0B]">
                <motion.p 
                    {...secFadeInEffects}
                    className="text-[12px] font-bold text-[#55FFCB] mt-10 lg:mt-0">OUR FACILITY</motion.p>
                <motion.h3 
                    {...scrollUpEffects}
                    className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-3 text-white">WORLD CLASS FACILITY. <br /> <span className="text-[#55FFCB]">PREMIUM EQUIPMENT.</span></motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Train in a 15,000 sq ft facility designed for serious results. From cutting-edge equipment to luxurios amenities, every detail is crafted to enhance your training experience.
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="w-full p-3 lg:p-5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {facilities.map((data, index) => (
                        <motion.div 
                            variants={staggerEffects}
                            className="w-full border-1 border-[#55FFCB]/20 rounded-xl relative group overflow-hidden mb-3">
                            <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl group-hover:scale-103 transition-all duration-300" />
                            <div className="absolute top-0 w-full h-48 group-hover:h-49 rounded-t-xl inset-0 bg-[#0A0B0B]/30 group-hover:bg-[#0A0B0B]/15 transition-all"></div>
                            <div className="flex flex-col w-full h-full bg-[#2A2A2A] p-5 rounded-b-xl">
                                <h3 className="font-bold text-xl text-white group-hover:text-[#55FFCB]">{data.title}</h3>
                                <p className="mt-3 text-[12px] text-white/80">
                                    {data.sub_text}
                                </p>
                                <div className="mt-5 mb-2 w-full grid grid-cols-2 gap-4">
                                    {data.benefits.map((data) => (
                                        <p className="flex items-center text-[11px] text-white/90 font-medium"><FaCircleCheck  className="w-3 h-3 text-[#55FFCB] mr-2"/>{data}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#242424]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    CORE VALUES
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        The Principles that define who we are and how we operate 
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView = "show"
                    viewport= {{ once : false}}
                    className="w-full py-5 px-3 lg:px-10 mt-5  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {principles.map((data, index) => (
                        <motion.div 
                            variants={staggerEffects}
                            key={index} className="p-6 border-1 bg-[#2A2A2A] border-[#55FFCB]/20 rounded-xl flex flex-col hover:bg-[#2E5046] transition-all duration-300 hover:border-none">
                            <span className="w-11 h-11 rounded-full bg-[#33554B] text-[#55FFCB] flex items-center justify-center">
                                <data.icon />
                            </span>
                            <h3 className="text-lg leading-tight mt-5 font-bold text-white heading">{data.title}</h3>
                            <p className="text-[12.5px] text-white/80 mt-5">
                                {data.sub_text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
            <div className="w-full p-3 lg:p-10 bg-[#0A0B0B] flex flex-col items-center ">
                <motion.h3 
                    {...scrollUpEffects}
                    className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-10 lg:mt-3 text-white">
                    WHY CHOOSE IRONCORE 
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        what sets us apart from every other gym
                </motion.p>
                <div className="w-full py-5 px-3 lg:px-10 mt-8 flex flex-col items-center space-y-7">
                    {choose.map((chose) => (
                        <motion.div 
                            {...scrollUpEffects}
                            className="w-full lg:w-[90%] md:flex md:flex-row flex flex-col bg-[#242424] md:space-x-5 border-1 space-y-5 lg:space-y-0 border-[#55FFCB]/20 p-5 rounded-xl">
                            <span className="w-12 h-12 rounded-full bg-[#33554B] text-[#55FFCB] flex items-center justify-center">
                                <chose.icon />
                            </span>
                            <div className="w-full md:w-[90%] flex flex-col space-y-4">
                                <h3 className="text-lg text-white font-bold heading">
                                    {chose.title}
                                </h3>
                                <p className="text-[13.5px] text-white/70">
                                    {chose.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* <span className="my-5 w-full  border-1 border-[#55FFCB]/10"></span> */}

            </div>
            <div className="w-full p-3 lg:p-10 mt-15 bg-[#0A0B0B] lg:flex flex flex-col lg:flex-row lg:space-x-5">
                <div className="w-full lg:w-1/2 flex flex-col p-5">
                    <motion.h3 
                        {...scrollUpEffects}
                        className="text-white font-bold text-3xl heading">OUR CULTURE</motion.h3>
                    <div className="flex flex-col space-y-4 mt-5 text-[13px] text-white/80">
                        <motion.p
                            {...scrollUpDelayEffects}    
                        >
                            Wlak into IronCore and you'll immediately feel the difference. The energy is electri yet welcoming. The atmosphere is motivating yet judgement-free. Members are focused yet friendly. This is the culture we've intentionality built and it's what keeps people coming back.
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                        >
                            We celebrate every victory, from a beginner's first push up to an athlete's personal record. We support each other through plateaus and setbacks. We push each otherto be better while respecting individual  journeys. Whether you're 18 or 80, or a complete beginner or seasoned athlete, you belong here.
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                        >
                            Our trainers dont just coach they inspire. THey remeber your name, track your progress, and genuinely care about your success. Our members don't just work out they connect. Many of our strongest friendships have been forged in the gym, through shared struggles and celebrated victories
                        </motion.p>
                        <motion.p
                            {...scrollUpDelayEffects}
                        >
                            This is more than a gym. It's a community. A family. A place where you can be yourself, challenge yourself, and transform yourself. This is IronCore Fitness.
                        </motion.p>
                    </div>
                    <motion.div 
                    {...scrollLeftEffects}
                    className="w-auto flex space-x-3 md:space-x-5 items-center mt-7">
                    <motion.button 
                        {...buttonHoverEffects}
                        className="cursor-pointer px-5 md:px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
                        Join Our Community
                    </motion.button>
                    <motion.button 
                        {...buttonHoverEffects}
                        className="cursor-pointer px-5 md:px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
                        Schedule a Tour
                    </motion.button>
                    </motion.div>
                </div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="w-full lg:w-1/2 p-2 lg:p-5 md:flex md:flex-row flex flex-col">
                    <div 
                        className="w-full md:w-1/2 h-full flex flex-col p-5 items-center justify-evenly space-y-5 lg:space-y-0">
                        <motion.img 
                            variants={staggerEffects}
                            src="/about/clt1.jpg" alt="" className="w-full  object-cover h-[50%] lg:h-[40%] rounded-xl hover:scale-102 transition-all duration-200" 
                        />
                        <motion.img 
                            variants={staggerEffects}
                            src="/about/clt3.jpg" alt="" className="w-full object-cover h-[50%] lg:h-[50%]  rounded-xl hover:scale-102 transition-all duration-200" 
                        />

                    </div>
                    <div className="w-full md:w-1/2 h-full border-1 flex flex-col p-5 items-center justify-evenly space-y-5 lg:space-y-0">
                        <motion.img 
                            variants={staggerEffects}
                            src="/about/clt2.jpg" alt="" className="w-full h-[50%] lg:h-[50%] object-cover rounded-xl hover:scale-102 transition-all duration-200" 
                        />
                        <motion.img 
                            variants={staggerEffects}
                            src="/about/clt4.jpg" alt="" className="w-full h-[220px] lg:h-[40%] object-cover rounded-xl hover:scale-102 transition-all duration-200" 
                        />

                    </div>
                </motion.div>
            </div>
            <div className="w-full py-8 px-5 lg:p-15 bg-[#242424] flex flex-col items-center justify-center">
                <motion.h3 
                    {...scrollUpEffects}
                    className="text-3xl md:text-4xl font-bold heading text-white mt-5 ">MEET OUR EXPERT TEAM</motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-full md:w-[85%] lg:w-[50%] text-center text-[12px] md:text-[13px] text-white/70 mt-5">
                    Get to know the certified trainers and coaches who will guide your transformation journey. Each brings unique expertise, advanced certifications, and a genuine passion for helping you succeed.
                </motion.p>
                <motion.button 
                    {...buttonHoverEffects}
                    className="cursor-pointer px-8 py-3 bg-[#55FFCB]  mt-5 text-[#0A0A0A] rounded-full font-bold text-[15px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
                    Meet our Trainers
                </motion.button>
            </div>
            <Footer />
        </>
    )
};