import { ReelsSlider } from "@/components/home/ReelsSlider";
import { USPBadges } from "@/components/home/USPBadges";
import { SareesByNakhrali } from "@/components/home/SareesByNakhrali";
import { SignatureSarees } from "@/components/home/SignatureSarees";
import { PartyCrashers } from "@/components/home/PartyCrashers";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { HaldiMehendiEdit } from "@/components/home/HaldiMehendiEdit";
import { StyledToStun } from "@/components/home/StyledToStun";
import { NakhraStyles } from "@/components/home/NakhraStyles";
import { BecauseBasic } from "@/components/home/BecauseBasic";
import { ModernLehengas } from "@/components/home/ModernLehengas";
import { TempleJewellery } from "@/components/home/TempleJewellery";
import { BlousesSection } from "@/components/home/BlousesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { KarismaticKurtas } from "@/components/home/KarismaticKurtas";
import { EverydayEssentials } from "@/components/home/EverydayEssentials";
import { MinimalSuitSets } from "@/components/home/MinimalSuitSets";
import { OxidizedElegance } from "@/components/home/OxidizedElegance";
import { CuratedBlogs } from "@/components/home/CuratedBlogs";
import { BrandBio } from "@/components/home/BrandBio";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <ReelsSlider />
      <USPBadges />
      <SareesByNakhrali />
      <SignatureSarees />
      <PartyCrashers />
      <CategoryGrid />
      <HaldiMehendiEdit />
      <StyledToStun />
      <NakhraStyles />
      <BecauseBasic />
      <ModernLehengas />
      <TempleJewellery />
      <BlousesSection />
      <Testimonials />
      <KarismaticKurtas />
      <EverydayEssentials />
      <MinimalSuitSets />
      <OxidizedElegance />
      <CuratedBlogs />
      <BrandBio />
    </div>
  );
}
