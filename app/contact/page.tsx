"use client";
import { FaClock, FaEnvelope, FaMapMarkedAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { motion } from 'framer-motion'
import { buttonHoverEffects, fadeInEffects, scaleInEffects, scrollLeftEffects, scrollRightEffects } from "../animations/animate";
export default function Contacts(){
    const info = [
        {
            icon : FaMapMarkedAlt,
            title : 'Address',
            text : 'IronCore suites Abuja Nigeria',
            type : 'address'
        },
        {
            icon : FaPhoneAlt,
            title : 'Phone',
            text : '+234 809 4445 099',
            type : 'phone'
        },
        {
            icon : FaEnvelope,
            title : 'Email',
            text : 'ironcorefitness.com',
            type : 'email'
        },
        {
            icon : FaClock,
            title : 'Opening Hours',
            day : ['Monday - Friday: 5:00 AM - 11:00 PM', 'Saturday - Sunday: 7:00 AM - 9:00 AM'],
            type : 'time'
        }
    ]
    return(
        <>
            <Navbar />
            <Header
            image="/header/contact.jpg"
            title="GET IN TOUCH"
            text="Have qeustions? We're here to help. Reach out and let's start your fitness journey" />
            <div className="w-full px-5 lg:px-15 py-10 bg-[#242424] lg:flex lg:flex-row lg:space-x-5 flex flex-col space-y-5 lg:space-y-0">
                <div className="w-full lg:w-1/2 lg:p-5 flex flex-col">
                    <motion.div 
                        {...scaleInEffects}
                        className="w-full p-3 lg:p-5 bg-[#2A2A2A] rounded-xl flex flex-col">
                        <h3 className="text-white font-bold heading text-xl">CONTACT INFO</h3>
                        <div className="w-full  flex flex-col space-y-8 mt-5 py-3 px-1.5">
                            {info.map((data) => {
                                if(data.type === "address"){
                                    return(
                                        <div className="flex space-x-3 items-center">
                                            <span className="w-10 h-10 p-1.5 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                                <data.icon />
                                            </span>
                                            <div className="flex flex-col">
                                                <h3 className="text-white font-semibold text-[14px]">{data.title}</h3>
                                                <p className="text-[12px] text-white/60 hover:text-white transition-all duration-300">{data.text}</p>
                                            </div>   
                                        </div>
                                    )
                                }
                                if(data.type === "phone"){
                                    return(
                                        <div className="flex space-x-3 items-center">
                                            <span className="w-10 h-10 p-1.5 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                                <data.icon />
                                            </span>
                                            <div className="flex flex-col">
                                                <h3 className="text-white font-semibold text-[14px]">{data.title}</h3>
                                                <a href={`tel: ${data.text}`} className="text-[12px] text-white/60 hover:text-white transition-all duration-300">{data.text}</a>
                                            </div>   
                                        </div>
                                    )
                                }
                                if(data.type === "email"){
                                    return(
                                        <div className="flex space-x-3 items-center">
                                            <span className="w-10 h-10 p-1.5 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                                <data.icon />
                                            </span>
                                            <div className="flex flex-col">
                                                <h3 className="text-white font-semibold text-[14px]">{data.title}</h3>
                                                <a href={`mailto: ${data.text}`} className="text-[12px] text-white/60 hover:text-white transition-all duration-300">{data.text}</a>
                                            </div>   
                                        </div>
                                )
                                }
                                if(data.type === "time"){
                                    return(
                                        <div className="flex space-x-3 items-center">
                                            <span className="w-10 h-10 p-1.5 flex items-center justify-center bg-[#33554B] text-[#55FFCB] rounded-full">
                                                <data.icon />
                                            </span>
                                            <div className="flex flex-col">
                                                <h3 className="text-white font-semibold text-[14px]">{data.title}</h3>
                                                <ul className=" mt-1 flex flex-col space-y-1.5">
                                                    {data.day?.map((day) => (
                                                        <li className="text-[12px] text-white/60">{day}</li>
                                                    ))}
                                                </ul>
                                            </div>   
                                        </div>
                                )
                                }
                            })}
                        </div>
                    </motion.div>
                    <div 
                        
                        className="w-full h-[250px] md:h-[400px] py-5 mt-5 rounded-xl">
                        <motion.iframe
                            {...scrollLeftEffects}
                            className="rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142849.11225863782!2d7.3460229867771005!3d9.025700499996331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1778575753791!5m2!1sen!2sng" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}}
                            allowFullScreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </motion.iframe>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full lg:p-5">
                    <motion.div 
                        {...scrollRightEffects}
                        className="w-full p-5 bg-[#2A2A2A] rounded-xl flex flex-col">
                        <h3 className="text-white font-bold heading text-xl">SEND US A MESSAGE</h3>
                        <p className="text-[12px] text-white/60 mt-5">Fill out the form below and we'll respond within 24 hours.</p>
                        <form action="" className="w-full space-y-5 mt-5">
                            <input type="text" placeholder="Your Name" className="text-[13px] outline-none text-white/60 bg-[#242424] border-b-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 w-full h-10.5 px-3 transition-all duration-300" />
                            <input type="email" placeholder="Your Email" className="text-[13px] outline-none text-white/60 bg-[#242424] border-b-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 w-full h-10.5 px-3 transition-all duration-300" />
                            <input type="text" placeholder="Your Phone" className="text-[13px] outline-none text-white/60 bg-[#242424] border-b-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 w-full h-10.5 px-3 transition-all duration-300" />
                            <textarea name="" placeholder="Your Message" className="text-[13px] outline-none text-white/60 bg-[#242424] border-b-1 border-[#55FFCB]/20 hover:border-[#55FFCB]/40 w-full h-35 p-3 transition-all duration-300" id=""></textarea>
                            <motion.button 
                                {...buttonHoverEffects}
                                className="w-full rounded-2xl text-[13px] font-bold w-full h-11.5 cursor-pointer bg-[#55FFCB]">
                                Send Message
                            </motion.button>


                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
}