import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Contacts(){
    return(
        <>
            <Navbar />
            <Header
            image="/header/contact.jpg"
            title="GET IN TOUCH"
            text="Have qeustions? We're here to help. Reach out and let's start your fitness journey" />
            <div className="w-full px-15 py-10 border-1 border-red-500 bg-[#242424] flex space-x-5">
                <div className="w-1/2 border-1 border-blue-500 p-5 flex flex-col">
                    <div className="w-full p-5 bg-[#2A2A2A] rounded-xl flex flex-col">
                        <h3 className="text-white font-bold heading text-xl">CONTACT INFO</h3>
                    </div>
                </div>
                <div className="w-1/2 border-1 border-blue-500 p-5">

                </div>
            </div>
            <Footer />
        </>
    )
}