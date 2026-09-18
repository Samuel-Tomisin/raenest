
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Hero from "./sections/hero";
import SecondSection from "./sections/testimonialsection";
import ThirdSection from "./sections/third";
import FourthSection from "./sections/fourth";
import FifthSection from "./sections/fifth";
import Sixthsection from "./sections/sixth";
import Sixthbsection from "./sections/sixthb";
import Seventhsection from "./sections/seventh";
import Eightsection from "./sections/eighth";
import FAQSection from "./sections/faqs";


export default function Home (){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <SecondSection/>
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