import CreatorClubHero from "@/component/creatorclubhero";
import CreatorApplicationForm from "@/component/creatorapplicationform";
import HowItWorks from "@/component/howitworks";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function Creatorclub() {
  return (
    <main>
      <Navbar />
      <CreatorClubHero />
      <CreatorApplicationForm />
      <HowItWorks />
      {/* <FAQSection faqs={CREATOR_CLUB_FAQS} /> */}
      <Footer />
    </main>
  );
}