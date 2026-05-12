"use client";

import { buttonHoverEffects, scrollUpDelayEffects, scrollUpEffects, staggerContainer, staggerEffects } from "../animations/animate";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { motion } from 'framer-motion'
import { mem_plans, mem_price_plans, mem_service } from "./memebership";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Membership(){
    return(
        <>
            <Navbar />
            <Header 
            image="/header/membership.jpg"
            title="MEMBERSHIP PLANS"
            text="Choose the plan that fits your goals. No long term commitments. Cancel anytime. All plan include our 7-day money back guarantee."/>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    MEMBERSHIP BENEFITS
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Flexible, fair and designed with you in mind.
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView = "show"
                    viewport= {{ once : false}}
                    className="w-full lg:w-[85%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {mem_plans.map((data, index) => (
                        <motion.div 
                            key={index}
                            variants={staggerEffects}
                            className="px-5 py-8 lg:py-5 flex flex-col items-center w-full border-1 border-[#55FFCB]/20 bg-[#242424] rounded-xl space-y-3 mb-3 lg:mb-0">
                            <span className="w-11 h-11 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                <data.icon />
                            </span>
                            <h3 className="font-semibold text-sm text-white text-center">{data.title}</h3>
                            <p className="text-[13px] text-white/70 text-center">{data.text}</p>
                        </motion.div>  
                    ))}
                </motion.div>
            </div>
            <div className="w-full p-10 flex flex-col items-center bg-[#242424]">
               <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    CHOOSE YOUR PLAN
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        All plans are month-to-month with no long-term commitment
                </motion.p>
                <div className="w-full py-5 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:space-x-5">
                    {mem_price_plans.map((data) => {
                    const most_popular = data.type === "Standard";
                    return (
                        <motion.div 
                            {...scrollUpEffects}
                            key={data.id} 
                            className={`relative p-6 rounded-2xl transition-all duration-300 bg-[#2A2A2A] flex flex-col items-center mb-5 lg:mb-0 ${most_popular ? "border-2 border-[#55FFCB] lg:scale-105 shadow-[0_0_30px_rgba(85,255,203,0.2)]" : "border-1 border-[#55FFCB]/20"}`}>
                            {most_popular && (
                                <p className="absolute top-[-12px] text-center left-[30%] px-4 py-1 text-[11px] font-bold rounded-full bg-[#55FFCB]">
                                MOST POPULAR
                                </p>
                            )}
                            <h3 className="text-white heading font-bold mt-1">
                                {data.title}
                            </h3>
                            <p className="text-[11px] mt-1 text-white/80">{data.text}</p>
                            <div className="flex mt-4 items-center">
                                <h3 className="heading font-bold text-3xl text-[#55FFCB]">${data.price}</h3>
                                <p className="mt-3 text-white/80 text-[11px]">/month</p>
                            </div>
                            <div className="w-[80%] py-2 px-5 flex flex-col items-center mt-5 bg-[#2F403B] border-1 border-[#55FFCB]/10 rounded-lg">
                                <h3 className="text-[#55FFCB] text-[11px]">BEST FOR:</h3>
                                <p className="text-[10px] text-white/70 text-center mt-1">{data.audience}</p>
                            </div>
                            <span className="mt-5 w-[90%] border-1 border-[#55FFCB]/10"></span>
                            <ul className=" w-[90%] mt-5 flex flex-col space-y-5">
                                {data.benefits.map((benefits, index) => (
                                <li key={`${data.title} - ${index}`} className="flex items-center space-x-2">
                                    <FaCircleCheck  className="w-3 h-3 text-[#55FFCB]"/>
                                    <p className="text-[11px] text-white/90 font-normal">{benefits}</p>
                                </li>
                                ))}
                            </ul>
                            <motion.a {...buttonHoverEffects} href="#" className={`w-[90%]  mt-6 rounded-full text-center text-[12px] font-semibold px-5 py-3  ${data.type === "Standard" ? "bg-[#55FFCB] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]" : "border-2 border-[#55FFCB] text-white"  }`}>Get Started</motion.a>
                        </motion.div>
                    )
                    })}
                </div>
                <p className="mt-8 text-white/70 text-[11px]">All plans include a 7-day money back guarantee - No long term contracts - Cancel anytime</p> 
                <a href="#" className="flex items-center font-semibold mt-4 text-[#55FFCB] text-[12px]">Have questions? Talk to our team <FaArrowRight  className="mt-0.5 ml-1"/></a> 
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center bg-[#0A0B0B]">
                <motion.h3 
                {...scrollUpEffects}
                className="text-3xl heading leading-tight text-center font-bold mt-10 lg:mt-3  text-white">
                    ENHANCE YOUR MEMBERSHIP
                </motion.h3>
                <motion.p 
                    {...scrollUpDelayEffects}
                    className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                        Add extra services to maximize your results
                </motion.p>
                <div className="w-[85%] p-5 mt-5 border-1 border-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mem_service.map((service, index) => (
                        <div key={index} className="w-full flex flex-col p-5 bg-[#2A2A2A] border-1 border-[#55FFCB]/20 rounded-xl">
                            <span className="w-11 h-11 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                <service.icon />
                            </span>
                            <h3 className="font-semibold text-white mt-4">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
};