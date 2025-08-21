import HeroImage from "../_components/hero/HeroImage";
import HeroIntroduction from "../_components/hero/HeroIntroduction";

const HeroSection = () => {
  return (
    <section className="layout">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
        <div className="lg:col-span-3">
          <HeroIntroduction />
        </div>
        <div className="lg:col-span-2">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
