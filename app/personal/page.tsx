"use client"

import Navbar from "@/component/navbar";
import Hero from "../sections/hero";
import TestimonialsSection from "../sections/testimonialsection";
import ThirdSection from "../sections/third";
import FourthSection from "../sections/fourth";
import FifthSection from "../sections/fifth";
import Sixthsection from "../sections/sixth";
import Sixthbsection from "../sections/sixthb";
import Seventhsection from "../sections/seventh";
import Eightsection from "../sections/eighth";
import FAQSection from "../sections/faqs";
import Footer from "@/component/footer";


export default function Personal(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <TestimonialsSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <Sixthsection/>
            <Sixthbsection/>
            <Seventhsection/>
            <Eightsection/>
            <FAQSection/>
            <Footer/>
        </div>
    );
}