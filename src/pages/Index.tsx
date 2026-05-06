import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { Platforms } from "@/components/sections/Platforms";
import { GiraplayTeaser } from "@/components/sections/Giraplay";
import { GiraplaceTeaser } from "@/components/sections/GiraplaceTeaser";
import { AppTeaser } from "@/components/sections/AppTeaser";
import { LatestNews } from "@/components/sections/LatestNews";

const Index = () => (
  <PageShell title="Angola's Voice. Africa's Stage.">
    <Hero />
    <StatsBar />
    <About />
    <Platforms />
    <GiraplayTeaser />
    <GiraplaceTeaser />
    <AppTeaser />
    <LatestNews />
  </PageShell>
);

export default Index;
