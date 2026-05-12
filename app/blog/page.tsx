import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Blog(){
    return(
        <>
            <Navbar />
            <Header
            title="FITNESS BLOG"
            text="Expert advice, training tips, nutrition guidance, and inspiring success stories to fuel your fitness journey"
            image="/header/blog.jpg" />
            <Footer />
        </>
    )
}