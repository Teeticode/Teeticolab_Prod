import "./styles.css";
import avatar from "../../assets/images/Avatar.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="avatar">
          <div
            className="avatar-image"
            style={{
              backgroundImage: `url(${avatar})`,
              width: "50px",
              height: "50px",
            }}
          ></div>
        </div>
        <div className="hero-title">
          <h1 className="title">
            I do code and <br /> make content about it
          </h1>
        </div>
        <div className="hero-desc">
          <p>
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
