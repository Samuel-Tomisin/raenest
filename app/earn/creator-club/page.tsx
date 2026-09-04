import CreatorClubHero from "@/component/creatorclubhero";
import CreatorApplicationForm from "@/component/creatorapplicationform";
import HowItWorks from "@/component/howitworks";
import Navbar from "@/component/navbar";

export default function Creatorclub() {
  return (
    <main>
      <Navbar />
      <CreatorClubHero />
      <CreatorApplicationForm />
      <HowItWorks />
      {/* <FAQSection faqs={CREATOR_CLUB_FAQS} /> */}
    </main>
  );
}