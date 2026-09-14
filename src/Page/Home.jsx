// COMPONENTS
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutPlatform from "../Components/AboutPlatform";
import Courses from "../Components/Courses";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutPlatform />
      <Courses />
    </div>
  );
}
