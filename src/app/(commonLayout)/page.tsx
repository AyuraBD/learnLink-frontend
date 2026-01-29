import ExploreTutorsSection from "@/components/modules/homepage/ExploreTutorsSection";
import HeroSection from "@/components/modules/homepage/HeroSection";
import HowItWorksSection from "@/components/modules/homepage/HowItWorks";
import WhyUsSection from "@/components/modules/homepage/WhyUs";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <HeroSection></HeroSection>
      <HowItWorksSection></HowItWorksSection>
      <ExploreTutorsSection></ExploreTutorsSection>
      <WhyUsSection></WhyUsSection>
    </div>
  );
}
