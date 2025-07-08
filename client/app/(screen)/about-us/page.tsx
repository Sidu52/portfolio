import AboutMeSection from "@/app/component/about";
import InterestsSection from "@/app/component/about/InterestsSection ";
import TimelineSection from "@/app/component/about/TimelineSection";

export default function AboutPage() {
  return (
    <div className="bg-[#010f1d]">
      <AboutMeSection />
      <TimelineSection />
      <InterestsSection />
    </div>
  );
}
