import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Comparison } from "@/components/sections/comparison";
import { Markets } from "@/components/sections/markets";
import { Services } from "@/components/sections/services";
import { Brands } from "@/components/sections/brands";
import { Advantages } from "@/components/sections/advantages";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { StickyCTA } from "@/components/ui/sticky-cta";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Comparison />
      <Markets />
      <Services />
      <Brands />
      <Advantages />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
