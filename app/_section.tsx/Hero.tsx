import { HeroImage, HeroIntroduction } from "../_components/Hero";

const HeroSection = () => {
  return (
    <section className="layout pt-18">
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
