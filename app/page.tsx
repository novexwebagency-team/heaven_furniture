

import ExploreCollection from "./components/ExploreCollection";
import FurnitureCollection from "./components/FurnitureCollection";
import Hero from "./components/Hero";
import ModernFurniture from "./components/ModernFurniture";
import OurStory from "./components/OurStory";
import VisitUs from "./components/VisitUs";

export default function Home() {
  return (
   <>
   <Hero />
   <OurStory />
   <ExploreCollection />
   <FurnitureCollection />
   <ModernFurniture />
   <VisitUs />
   </>
  );
}
