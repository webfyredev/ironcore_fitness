"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { FaCertificate, FaStar, FaTrophy, FaChalkboardTeacher, FaChartLine, FaUsers, FaBuilding, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { foot_data, foot_stats, membership_plans, price_plans, programs, testimonial_rate, testimonials, trainer_stats, trainers } from "./data";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import { motion } from 'framer-motion' 
import { buttonHoverEffects, fadeInEffects, ParagraphscaleInEffects, scaleInEffects, scrollDownEffects, scrollLeftEffects, scrollRightEffects, scrollUpDelayEffects, scrollUpEffects, secFadeInEffects, staggerContainer, staggerEffects } from "./animations/animate";

export default function Home() {
  const [index, setIndex] = useState(0);
  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev -1));

  };
  const next = () => {
    setIndex((prev) => (prev  === testimonials.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(interval);
  }, [index]);
  const item = testimonials[index];
  const about = [
    {
      icon : FaChalkboardTeacher,
      title : 'Expert Coaching',
      text : 'Certified trainers with decades of combined experience guide you every step of the way.'
    },
    {
      icon : FaChartLine,
      title : 'Proven Results',
      text : 'Data-driven programs designed to deliver measurable, sustainable transformation.'
    },
    {
      icon : FaUsers,
      title : 'Supportive Community',
      text : 'Join a family of motivated individuals who celebrate every victory together.'
    },
    {
      icon : FaBuilding,
      title : 'World-Class Facility',
      text : 'State-of-the-art equipment and premium amenities for the ultimate training experience.'
    }
  ]
  const achts = [
    {
      icon : FaStar,
      text : '5-Star Rated'
    },
    {
      icon : FaCertificate,
      text : 'Certified Trainers'
    },
    {
      icon : FaTrophy,
      text : '2000+ Members'
    },
  ];
  const stats = [
    {
      value : '2000+',
      text : 'Active Members'
    },
    {
      value : '15+',
      text : 'Expert Trainers'
    },
    {
      value : '50+',
      text : 'Weekly Classes'
    },
    {
      value : '10K+',
      text : 'Success Stories'
    }
  ]
  return (
    <>
      <Navbar />
      <div className="w-full relative h-[100vh] flex items-center justify-center overflow-hidden">
          <img src="/hero2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="w-full h-full absolute inset-0 bg-black/70 top-0 left-0 flex flex-col items-center justify-center">
            <motion.div 
              {...scrollDownEffects}
              className="w-auto flex space-x-5 p-2 mt-10 lg:mt-25">
              {achts.map((data, index) => (
                <div key={index} className="flex space-x-2 items-center px-2 md:px-4 py-2 rounded-full border-1 bg-[#070A0C] border-[#55FFCB]/20">
                    <data.icon  className="text-[#55FFCB]"/>
                    <p className="font-medium text-white text-[7px] md:text-[10px]">{data.text}</p>
                </div>
              ))}

            </motion.div>
            <motion.h3 
              {...scrollRightEffects}
              className="heading w-[90%] md:w-[65%] lg:w-[50%] mt-5 lg:mt-10 text-center text-white text-[30px] md:text-[45px] lg:text-[55px] font-bold leading-tight">TRANSFORM YOUR BODY. <br /> <span className="text-[#55FFCB]">UNLOCK YOUR STRENGTH.</span></motion.h3>
            <motion.p 
              {...scrollUpDelayEffects}
              className="w-[90%] md:w-[65%] lg:w-[55%] mt-5 lg:mt-8 text-center text-white/90 text-sm md:text-base">Elite training programs, certified coaches, and a community built to help you win. Whether you're starting 
              your fitness journey or pushing to the next level, IronCore is where transformation happens.
            </motion.p>
            <motion.div 
              {...scaleInEffects}
              className="flex items-center space-x-5 mt-5 ">
              <motion.button 
                  {...buttonHoverEffects}
                  className="cursor-pointer px-7 py-3 text-[13px] rounded-full text-[#0A0A0A] bg-[#55FFCB] font-bold">
                  Join Now
              </motion.button>
              <motion.button 
                {...buttonHoverEffects}
                className="cursor-pointer px-7 py-3 text-[13px] border-2 border-white rounded-full text-white font-bold">
                  Book Free Session
              </motion.button>
            </motion.div>
            <motion.div 
              {...scrollUpEffects}
              className="w-auto p-5  mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((data, index) => (
                <div key={index} className="flex flex-col items-center py-3.5 px-6 border-1 bg-[#070A0C] border-[#55FFCB]/20 rounded-xl">
                    <h3 className="heading text-[#55FFCB] font-bold text-xl">
                      {data.value}
                    </h3>
                    <p className="body mt-2 font-semibold text-white/80 text-[12px]">
                      {data.text}
                    </p>
                </div>
              ))}
            </motion.div>
          </div>
      </div>
      <div className="w-full px-5 lg:px-10 py-10 lg:py-20 bg-[#242424] lg:flex lg:flex-row flex flex-col lg:space-x-10 overflow-hidden">
          <div className="w-full lg:w-1/2 p-2 lg:p-5 flex items-center justify-center mt-5 relative overflow-hidden">
              <motion.img 
                {...scrollLeftEffects}
                src="/hero.jpg" alt="" className="w-full h-[80%] rounded-xl object-cover" />
              <motion.div 
                  {...fadeInEffects}
                  className="absolute w-[80%] top-[70%] p-5 hidden md:flex items-center space-x-5">
                  <div className="w-1/2 py-2 px-3.5 flex flex-col  border-1 bg-[#070A0C] border-[#55FFCB]/20 rounded-xl">
                    <h3 className="heading text-[#55FFCB] font-bold text-xl">
                      10+
                    </h3>
                    <p className="text-white font-bold text-[12px] mt-1.5">
                      Years Experience
                    </p>
                  </div>
                  <div className="w-1/2 py-2 px-3.5 flex flex-col  border-1 bg-[#070A0C] border-[#55FFCB]/20 rounded-xl">
                    <h3 className="heading text-[#55FFCB] font-bold text-xl">
                      98%
                    </h3>
                    <p className="text-white font-bold text-[12px] mt-1.5">
                      Sucess Rate
                    </p>
                  </div>
              </motion.div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-left p-2 lg:p-5 justify-center mt-5">
              <motion.p 
                {...secFadeInEffects}
                className="text-[12px] font-bold text-[#55FFCB]">ABOUT IRONCORE FITNESS</motion.p>
              <motion.h3 
                {...scrollUpEffects}
                className="text-4xl heading leading-tight font-bold mt-3 text-white">MORE THAN A GYM. <br /> <span className="text-[#55FFCB]">A TRANSFORMATION HUB</span></motion.h3>
              <div className="w-full flex flex-col space-y-2 mt-5 text-[13px] text-white/80">
                <motion.p
                  {...scrollUpDelayEffects}  
                >At IronCore Fitness, we believe fitness is more than just lifting weights or running  ona treadmill. It's about building confidence,
                  discipline, and a lifestyle that empowers you to become the strongest vresion of yourself
                </motion.p>
                <motion.p
                  {...scrollUpDelayEffects}
                  >
                  Founded in 2015, we've grown from a small training studio into one of Los Angeles premier fitness destinations. Our missions has always been simple: create a space where everyone from complete beginners to elite athletes feels welcome, supported, and motivated to achieve their goals
                </motion.p>
                <motion.p
                  {...scrollUpDelayEffects}
                  >
                  what set us apart? It's our people. Our certified trainers don't just count reps they invest in your success. Our community doen't just work out together, they left each other up. And our programs aren't cookie-cutter, they are personalized to your unique needs and goals
                </motion.p>
              </div>
              <motion.div 
                {...scrollRightEffects}
                className="mt-5 p-2 w-full grid grid-cols-1 sm:grid=cols-1 md:grid-cols-2 gap-5">
                {about.map((data, index) => (
                  <div key={index} className=" w-full flex space-x-2">
                    <div className="flex w-11 h-11 rounded-full flex items-center justify-center bg-[#2E5046] text-[#55FFCB]">
                      <data.icon  className="w-5 h-5"/>
                    </div>
                    <div className="w-[80%] flex flex-col">
                      <h3 className="text-white text-sm font-bold">{data.title}</h3>
                      <p className="text-[11px] mt-1 text-white/80">{data.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <div className="w-full flex space-x-5 items-center mt-5">
                  <motion.button 
                    {...buttonHoverEffects}
                    className="hover:shadow-[0_0_30px_rgba(85,255,203,0.2)] cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px]">
                    Learn More About Us
                  </motion.button>
                  <motion.button 
                    {...buttonHoverEffects}
                    className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
                    Meet Our Trainers
                  </motion.button>
              </div>
          </div>
      </div>
      <div className="w-full p-5 lg:p-15 flex flex-col items-center bg-[#0A0B0B] overflow-hidden">
          <motion.p 
            {...secFadeInEffects}
            className="text-[12px] font-bold text-[#55FFCB] mt-10 lg:mt-0">OUR PROGRAMS</motion.p>
          <motion.h3 
            {...scrollUpEffects}
            className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-3 text-white">PROGRAM DESIGNED<br /> <span className="text-[#55FFCB]">FOR YOUR SUCCESS</span></motion.h3>
          <motion.p 
            {...scrollUpDelayEffects}
            className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
                Whether you're just starting out or training for competition, we have a program that fits your goals, schedule and fitness level. Every program is backed by science and delivered by certified experts
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView = "show"
            viewport= {{ once : false}}
            className="w-full mt-5 p-2 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {programs.map((data, index) => {
                const Icon = data.icon;
                return(
                  <motion.div 
                    variants={staggerEffects}
                    key={index} className="w-full p-6 border-1  bg-[#2A2A2A] hover:border-2 border-[#55FFCB]/20 flex flex-col rounded-xl bg-[#242424] transition-all ">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#2E5046] to-[#242424]/80 text-[#55FFCB]">
                      <Icon  className="w-5.5 h-5.5"/>
                    </div>
                    <h3 className="font-bold text-white mt-4">{data.title}</h3>
                    <p className="text-[11px] mt-4 text-white/80">
                      {data.sub_text}
                    </p>
                    <ul className="flex flex-col space-y-2 mt-5">
                      {data.activities.map((data, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FaCircleCheck  className="w-3 h-3 text-[#55FFCB]"/>
                          <p className="text-[10px] text-white/90 font-medium">{data}</p>
                        </li>
                      ))}
                    </ul>
                    <Link href="#" className=" mt-5 text-[11px] font-semibold items-center flex text-[#55FFCB]">
                      Learn More <FaArrowRight  className="ml-1.5"/>
                    </Link>
                  </motion.div>
                );
              })}
          </motion.div>
          <motion.p 
            {...scrollUpEffects}
            className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
          Not sure which program is right for you? Let our experts help you find the perfect fit.
          </motion.p>
          <motion.div 
            {...scrollRightEffects}
            className="w-auto flex space-x-3 md:space-x-5 items-center mt-5">
            <motion.button 
              {...buttonHoverEffects}
              className="cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
              View All Programs
            </motion.button>
            <motion.button 
              {...buttonHoverEffects}
              className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
              Get Free Consultation
            </motion.button>
          </motion.div>
      </div>
      <div className="w-full p-5 lg:p-15 flex flex-col items-center bg-[#242424] overflow-hidden">
          <motion.p 
            {...fadeInEffects}
            className="text-[12px] font-bold text-[#55FFCB] mt-10 lg:mt-0">MEMEBERSHIP PLANS</motion.p>
          <motion.h3 
            {...scrollUpEffects}
            className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-3 text-white">FLEXIBLE PLANS.<br /> <span className="text-[#55FFCB]">ZERO COMMITMENT</span></motion.h3>
          <motion.p 
              {...scrollUpDelayEffects}
              className="w-[92%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
              Choose the membership that fits that fits your lifestyle and goals. All plans include our 7-day money-back guarantee, no long-term contracts,  and the freedom to upgrade, downgrade, or cancel anytime.
          </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="w-full py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {membership_plans.map((data, index) => {
                const Icon = data.icon;
                return (
                  <motion.div 
                    variants = {staggerEffects}
                    key={index} className="p-5 border-1 border-[#55FFCB]/20 bg-[#2A2A2A] hover:bg-transparent transition-all  flex flex-col items-center rounded-xl group">
                    <div className="p-1 w-10 h-10 flex items-center justify-center bg-[#2E5046] text-[#55FFCB] rounded-full group-hover:bg-[#2A2A2A]">
                      <Icon  className="w-4 h-4"/>
                    </div>
                    <h3 className="text-sm font-bold text-white mt-4 group-hover:text-[#55FFCB]">{data.title}</h3>
                    <p className="text-[11px] mt-1 text-white/80">{data.sub_text}</p>
                  </motion.div>
                )
              })}
          </motion.div>
          <div className="w-full py-5 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:space-x-5">
              {price_plans.map((data, index) => {
                const most_popular = data.type === "Standard";
                return (
                  <motion.div 
                    {...scrollUpEffects}
                    key={index} className={`relative p-6 rounded-2xl transition-all duration-300 bg-[#2A2A2A] flex flex-col items-center mb-5 lg:mb-0 ${most_popular ? "border-2 border-[#55FFCB] lg:scale-103 shadow-[0_0_30px_rgba(85,255,203,0.2)]" : "border-1 border-[#55FFCB]/20"}`}>
                    {most_popular &&(
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
                    <span className="mt-5 w-[90%] border-1 border-[#55FFCB]/10"></span>
                    <ul className=" w-[90%] mt-5 flex flex-col space-y-5">
                      {data.benefits.map((data, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FaCircleCheck  className="w-3 h-3 text-[#55FFCB]"/>
                          <p className="text-[11px] text-white/90 font-normal">{data}</p>
                        </li>
                      ))}
                    </ul>
                    <motion.a {...buttonHoverEffects} href="#" className={`w-[90%]  mt-6 rounded-full text-center text-[12px] font-semibold px-5 py-3  ${data.type === "Standard" ? "bg-[#55FFCB] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]" : "border-2 border-[#55FFCB] text-white"  }`}>Choose {data.type}</motion.a>

                  </motion.div>
                )
              })}
          </div>
          <motion.div 
              {...fadeInEffects}
              className="w-full p-5 flex flex-col items-center space-y-5 bg-[#2A2A2A] border-1 border-[#55FFCB]/20 rounded-xl mt-10">
              <h3 className="heading text-white text-lg font-bold">NOT SURE WHICH PLAN IS RIGHT?</h3>
              <p className="w-[95%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80">
                Schedule a free consultation with our team. We'll discuss your goals, show you around the facility, and help you choose the perfect membership plan.
              </p>
              <motion.div 
                {...scrollUpEffects}
                className="w-auto flex space-x-5 items-center">
                <motion.button
                  {...buttonHoverEffects} 
                  className="cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px]">
                  View All Plans
                </motion.button>
                <motion.button 
                  {...buttonHoverEffects}
                  className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
                  Schedule Free Tour
                </motion.button>
              </motion.div>

          </motion.div>
      </div>
      <div className="w-full p-5 lg:p-15 flex flex-col items-center bg-[#0A0B0B] overflow-hidden">
          <motion.p 
            {...ParagraphscaleInEffects}
            className="text-[12px] font-bold text-[#55FFCB] mt-10 lg:mt-0">OUR EXPERT TEAM
          </motion.p>
          <motion.h3 
            {...scrollUpEffects}
            className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-3 text-white">MEET YOUR <br /> <span className="text-[#55FFCB]">TRANSFORMATION COACHES</span></motion.h3>
          <motion.p 
            {...scrollUpDelayEffects}
            className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
            Our certified trainers bring decades of combined experiences, advanced certifications, and a genuine passion for helping you achieve your goals. They're not just coaches, they're your partners in transformation.
          </motion.p>
          <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="w-full py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {trainers.map((data, index) => (
                <motion.div 
                  variants = {staggerEffects}
                  key={index} className="w-full flex flex-col border-1 border-[#55FFCB]/20 rounded-xl relative overflow-hidden group mb-5 lg:mb-0">
                  <img src={data.image} alt="trainer_image" className=" w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300" />
                  <div className="absolute w-full h-45 inset-0 bg-[#0A0B0B]/25 group-hover:bg-[#0A0B0B]/5"></div>
                  <div className="w-full h-full flex flex-col px-4 py-2 rounded-b-xl bg-[#2A2A2A]">
                    <h3 className="mt-3 text-white font-bold text-lg group-hover:text-[#55FFCB] transition-all">{data.name}</h3>
                    <p className="font-semibold text-[#55FFCB] text-[12px] mt-1">{data.title}</p>
                    <p className="text-[11px] mt-4 text-white/80">{data.sub_text}</p>
                    <p className="text-[9px] mt-4 text-white/50 font-medium">SPECIALITY:</p>
                    <p className="text-[11px] mt-1 text-white font-medium">{data.speciality}</p>
                    <div className="w-auto grid  mt-3 md:grid-cols-2 gap-2">
                      {data.skill.map((data, index) => (
                        <p key={index} className="border-1 bg-[#2E5046] mb-1 lg:mb-0 border-[#55FFCB]/20 px-5 text-[#55FFCB] text-[10px] py-2 lg:py-1 text-center font-semibold rounded-full">{data}</p>
                      ))}
                    </div>
                    <Link href="#" className="mt-8 text-[11px] font-semibold items-center flex text-[#55FFCB]">
                    View Profile <FaArrowRight  className="ml-1.5"/>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <div className="w-full mt-5 p-5 border-1 border-[#55FFCB]/20 rounded-xl bg-[#2A2A2A] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {trainer_stats.map((data, index) => (
              <div key={index} className="flex flex-col p-3 items-center">
                    <motion.h3 
                      {...scrollUpDelayEffects}
                      className="heading text-[#55FFCB] font-bold text-xl">
                      {data.value}
                    </motion.h3>
                    <motion.p 
                      {...scrollUpEffects}
                      className="body mt-2 font-semibold text-white/70 text-[12px]">
                      {data.text}
                    </motion.p>
                  {/* <h3 className="font-bold text-2xl text-[#55FFCB] heading">{data.value}</h3> */}
              </div>
            ))}
          </div>
          <h3 className="mt-10 heading font-bold text-white text-2xl text-center">READY TO WORK WITH OUR EXPERT TEAM?</h3>
          <p className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
          Whether you need one-on-one coaching or prefer group classes, our trainers are here to guide, motivate, and support you every step of the way
          </p>
          <div className="w-auto flex space-x-5 items-center mt-5">
            <motion.button 
              {...buttonHoverEffects}
              className="cursor-pointer px-6 py-3 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[12px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)]">
              Meet All Trainers
            </motion.button>
            <motion.button 
              {...buttonHoverEffects}
              className="cursor-pointer px-6 py-3 bg-transparent text-white rounded-full font-bold text-[12px] border-2 border-[#55FFCB]">
              Book Free Consulation
            </motion.button>
          </div>
      </div>
      <div className="w-full p-5 lg:p-15 flex flex-col items-center bg-[#242424] overflow-hidden">
          <motion.p 
            {...ParagraphscaleInEffects}
            className="text-[12px] font-bold text-[#55FFCB] mt-10 lg:mt-0">SUCCESS STORIES</motion.p>
          <motion.h3 
            {...scrollUpEffects}
            className="text-3xl md:text-4xl heading leading-tight text-center font-bold mt-3 text-white">REAL PEOPLE.<br /> <span className="text-[#55FFCB]">REAL RESULTS.</span></motion.h3>
          <motion.p 
            {...scrollUpDelayEffects}
            className="w-[90%] md:w-[65%] lg:w-[50%] text-center text-[13px] text-white/80 mt-5">
            Don't just take our word for it. Hear from real IronCore members who transformed their bodies, minds, and lives. These are just few of thousands of success stories we're proud to be part of 
          </motion.p>
          <div className="p-3 lg:p-5 mt-5 w-full border-1  rounded-2xl bg-[#2A2A2A] border-[#55FFCB]/20 ">
            <div className="relative rounded-2xl p-1 md:p-3 flex flex-col lg:flex-row gap-4 lg:gap-6 items-center transition-all duration-300">
                <div className="relative w-full lg:w-1/2 h-[250px] md:h-[350px] rounded-xl">
                  <Image  src={item.image} alt={item.name} fill  className="object-cover rounded-xl hover:scale-105 transition-all duration-300"/>
                   <span className="absolute top-4 left-4 bg-[#55FFCB] text-black text-[11px] font-bold px-5 py-1.5 rounded-full">
                    TRANSFORMATION
                  </span>
                  <span className="absolute bottom-[-10px] left-15  md:left-60 lg:left-40 bg-[#55FFCB] text-black text-[10px] md:text-[11px] font-semibold px-7 py-1.5 rounded-full">
                    {item.result}
                  </span>
                  {/* <img src={item.image} alt="testimonial images" className="w-full h-full object-cover" /> */}
                </div>
                <div className="w-full lg:w-1/2 p-3 lg:p-5 h-full flex flex-col">
                  <div className="flex gap-1 mb-6 text-[#55FFCB]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed italic mb-7 text-white/80">
                    "{item.story}"
                  </p>
                   <h4 className="font-bold text-xl text-white">{item.name}</h4>
                   <p className="text-[#55FFCB] text-[13px] font-medium">{item.process}</p>
                </div>
                <button
                  onClick={prev}
                  className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-[#55FFCB] text-[#0A0B0B] p-3 rounded-full"
                >
                  <FaArrowLeft className="w-3 h-3" />
                </button>
                 <button
                  onClick={next}
                  className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-[#55FFCB] text-[#0A0B0B] p-3 rounded-full"
                >
                  <FaArrowRight  className="w-3 h-3"/>
                </button>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#55FFCB] w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <motion.div 
            {...scrollRightEffects}
            className="w-full py-5 mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonial_rate.map((data, index) => (
              <div key={index} className="p-5 border-1 border-[#55FFCB]/20 bg-[#2A2A2A] hover:bg-transparent transition-all  flex flex-col items-center rounded-xl group">
                <h3 className="text-2xl heading  font-bold text-[#55FFCB]">{data.value}</h3>
                <p className="text-[11px] mt-1 text-white/80">{data.text}</p>
              </div>
            ))}
          </motion.div>
      </div>
      <div className="w-full h-full lg:h-auto relative overflow-hidden">
        <img src="/home/foot.jpg" alt="" className="w-full h-[65vh] md:h-[55vh] lg:h-full object-cover" />
        <div className="absolute w-full h-full inset-0 bg-[#0A0B0B]/65 top-0 flex flex-col items-center justify-center overflow-hidden">
            <motion.p 
              {...ParagraphscaleInEffects}
              className="text-[11px] font-semibold bg-[#2E5046] px-4 py-1.5 text-[#55FFCB] border-1 border-[#55FFCB]/20 rounded-full mt-15">LIMITED TIME OFFER</motion.p>
            <motion.h3 
              {...scrollUpEffects}
              className="mt-3 w-[95%] md:w-[75%] lg:w-[60%] heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center">START YOUR TRANSFORMATION TODAY. <span className="text-[#55FFCB]">YOUR STRONGER SELF IS WAITING.</span></motion.h3>
            <motion.p 
              {...scrollUpDelayEffects}
              className="hidden md:flex md:w-[85%] lg:w-[45%] text-center mt-5 text-white/80 text-base">Don't wait another day to become the person you've always wanted to be. Join IronCore Fitness and get access to expert coaching, world-class facilities, and a community that will support you every step of the way.</motion.p>
            <motion.div 
              {...scrollUpDelayEffects}
              className="hidden lg:flex w-[65%] p-5 mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {foot_data.map((data) => (
                <div className="rounded-xl px-5 py-7 border-1 border-[#55FFCB]/20 flex flex-col items-center bg-[#0A0B0B]/50">
                  <div className="flex w-10 h-10 rounded-full flex items-center justify-center bg-[#2E5046] text-[#55FFCB]">
                      <data.icon  className="w-4 h-4"/>
                  </div>
                  <h3 className="font-semibold text-white mt-3 text-sm">{data.title}</h3>
                  <p className="text-[11px] mt-1.5 text-white/80">{data.text}</p>
                  
                </div>
              ))}
              
            </motion.div>
            <div className="w-full md:flex md:flex-row flex flex-col justify-center items-center md:space-x-5 space-y-3 md:space-y-0 mt-5">
              <motion.button 
                {...buttonHoverEffects}
                className="cursor-pointer px-8 py-3.5 bg-[#55FFCB] text-[#0A0A0A] rounded-full font-bold text-[14px] hover:shadow-[0_0_30px_rgba(85,255,203,0.2)] transition-all duration-300">
                Join IronCore Today
              </motion.button>
              <motion.button 
                {...buttonHoverEffects}
                className="cursor-pointer px-8 py-3.5 bg-transparent text-white rounded-full font-bold text-[14px] border-2 border-[#55FFCB]">
                Schedule Free Tour
              </motion.button>
            </div>
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="p-5 mt-5 w-[95%] md:w-[80%] lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-1">
                {foot_stats.map((data, index) => (
                  <motion.p 
                    variants={staggerEffects}
                    className="w-auto flex items-center text-white font-medium text-[10px] mb-3 md:mt-0">
                    <data.icon  className="w-4 h-4 text-[#55FFCB] mr-1"/>
                    {data.title}
                  </motion.p>
                ))}
            </motion.div>
        </div>  
          {/* <Image src="/home/foot.jpg" alt="foot_img" width={fil} className="object-cover" /> */}
      </div>
      <Footer />
    </>
  );
}
