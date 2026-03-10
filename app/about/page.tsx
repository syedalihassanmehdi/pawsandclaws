import AboutHero from "@/components/about/Abouthero";
import AboutStory from "@/components/about/Aboutstory";
import AboutStats from "@/components/about/Aboutstats";
import AboutFeatures from "@/components/about/Aboutfeatures";
import AboutTeamPreview from "@/components/about/Aboutteampreview";
import AboutCTA from "@/components/about/Aboutcta";

export default function AboutPage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
      }}
    >
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutFeatures />
      <AboutTeamPreview />
      <AboutCTA />
    </div>
  );
}