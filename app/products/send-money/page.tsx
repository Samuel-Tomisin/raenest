"use client"


import SendMoneyHero from "@/component/sendmoneyhero";
import SendMoneyCarousel from "@/component/sendmoneycarousel";
import FirstTransferSteps from "@/component/first-transfer-steps";
import SecuritySection from "@/component/security-section";
import Second from "@/app/sections/second";
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