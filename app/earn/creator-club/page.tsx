import CreatorClubHero from "@/component/creatorclubhero";
import CreatorApplicationForm from "@/component/creatorapplicationform";
import HowItWorks from "@/component/howitworks";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import FAQSection from "@/app/sections/faqs";

export default function Creatorclub() {
  return (
    <main>
      <Navbar />
      <CreatorClubHero />
      <CreatorApplicationForm />
      <HowItWorks />
      <FAQSection/>
      {/* <FAQSection faqs={CREATOR_CLUB_FAQS} /> */}
      <Footer />
    </main>
  );
}