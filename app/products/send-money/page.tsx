"use client"


import SendMoneyHero from "@/component/sendmoneyhero";
import SendMoneyCarousel from "@/component/sendmoneycarousel";
import FirstTransferSteps from "@/component/firsttransfersteps";
import SecuritySection from "@/component/securitysection2";
import Second from "@/app/sections/testimonialsection";
import Footer from "@/component/footer";
// import TestimonialsSection from "@/component/testimonialssection";
// import FAQSection from "@/component/faqsection";

export default function SendmoneyPage() {
  return (
    <main>
      <SendMoneyHero />
      <SendMoneyCarousel />
      <FirstTransferSteps />
      <SecuritySection />
      <Second/>
      <Footer/>
      {/* <TestimonialsSection />
      <FAQSection /> */}

      {/*
        Reusable component slot.
        Drop whatever you're building (CTA banner, blog cards, footer, etc.)
        in here — everything above stays untouched.
      */}

      {/* <YourReusableComponent /> */}
    </main>
  );
}