import "./styles.css";
import avatar from "../../assets/images/Avatar.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="avatar">
          <img className="avatar_img" src={avatar} />
        </div>
        <div className="hero-title">
          <h1 className="title">
            I do code and <br /> make content about it
          </h1>
        </div>
        <div className="hero-desc">
          <p className="desc">
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development.
          </p>
        </div>
        <div className="hero_buttons">
          <button className="get_in_touch">Get In Touch</button>
          <button className="cv">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
