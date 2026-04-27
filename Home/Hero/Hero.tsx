import { heroSlides } from "./heroData";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection slide={heroSlides[0]} />
    </div>
  );
};

export default Hero;
