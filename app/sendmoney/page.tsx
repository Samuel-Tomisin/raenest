"use client"


import SendMoneyHero from "@/component/sendmoneyhero";
import SendMoneyCarousel from "@/component/sendmoneycarousel";
import FirstTransferSteps from "@/component/firsttransfersteps";
import SecuritySection from "@/component/securitysection2";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
// import TestimonialsSection from "@/component/testimonialssection";
// import FAQSection from "@/component/faqsection";

export default function SendMoneyPage() {
  return (
    <main>
      <Navbar />
      <SendMoneyHero />
      <SendMoneyCarousel />
      <FirstTransferSteps />
      <SecuritySection />
      {/* <TestimonialsSection />
      <FAQSection /> */}

      {/*
        Reusable component slot.
        Drop whatever you're building (CTA banner, blog cards, footer, etc.)
        in here — everything above stays untouched.
      */}

      {/* <YourReusableComponent /> */}
      <Footer/>
    </main>
  );
}
