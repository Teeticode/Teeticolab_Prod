import "./styles.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="desc_container">
          <p className="title_about">Services I Offer</p>
          <p className="desc_about">
            We believe in true partnership and thus get our customers a bang for
            their bucks. There are various areas in which we function, here are
            a few of them.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <p className="title_box">Web Design & Web Development</p>
            <button className="action">check</button>
          </div>
          <div className="box">
            <p className="title_box">Web Design & Web Development</p>
            <button className="action">check</button>
          </div>
          <div className="box">
            <p className="title_box">Web Design & Web Development</p>
            <button className="action">check</button>
          </div>
          <div className="box">
            <p className="title_box">Web Design & Web Development</p>
            <button className="action">check</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
