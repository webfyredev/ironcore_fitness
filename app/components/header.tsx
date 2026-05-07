"use client";

interface HeaderProps {
    title : string,
    text : string
}
export default function Header({title, text} : HeaderProps){
    return (
        <>
            <div className="w-full relative h-80 bg-red-500 relative">
                <img src="/head2.jpg" alt="header image" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 inset-0 bg-[#0A0B0B]/85 flex flex-col items-center justify-center">
                    <h3 className=" mt-5 text-3xl md:text-4xl lg:text-5xl font-bold heading text-white ">
                        {title}
                    </h3>
                    <p className="w-[85%] md:w-[75%] lg:w-[55%] text-center mt-5 text-sm md:text-base text-white/80">
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}