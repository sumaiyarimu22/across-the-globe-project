import Image from "next/image";
import heroImage from "../../public/Rectangle 2.png";

const Hero = () => {
  return (
    <div className="hero-img position-relative bg-primary">
      <Image
        src={heroImage}
        alt="hero image"
        priority
        height={1000}
        width={1000}
        className="w-100 h-100 object-fit-lg-cover object-fit-sm-cover"
      />
      <div className="hero-shadow"></div>
      <div className="hero-text container light-text">
        <h3>Computer Engineering</h3>
        <small>142,765 Computer Engineers follow this</small>
      </div>
    </div>
  );
};

export default Hero;
