import logo from "../../assets/images/logo.png";
import { cilMenu, cilX } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import "./style.css";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const getNav = () => {
    let sidenav = document.querySelector(".sidenav");
    sidenav?.classList.remove("hide");
    sidenav?.classList.add("show");
  };
  const removeNav = () => {
    let sidenav = document.querySelector(".sidenav");
    sidenav?.classList.add("hide");
  };
  return (
    <header className="header">
      <div className="logo">
        <h4>Teeti</h4>
        <h4 className="name">Colab</h4>
      </div>
      <div className="links">
        <ul className="nav">
          <li className="nav-link">Services</li>
          <li className="nav-link">Portfolio</li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">Testimonials</li>
        </ul>
      </div>
      <div className="contact">
        <button className="btnPrimary">Contact Me</button>
      </div>

      <div className="sidebar">
        <CIcon
          icon={cilMenu}
          size="custom"
          style={{ width: "30px", height: "30px" }}
          className="menu"
          onClick={() => getNav()}
        />
        <ul className="sidenav">
          <CIcon
            icon={cilX}
            onClick={() => removeNav()}
            size="custom"
            style={{
              width: "30px",
              height: "30px",
              alignSelf: "flex-start",
              margin: "20px",
            }}
            className="menu"
          />
          <li className="side-link active">Services</li>
          <li className="side-link">Portfolio</li>
          <li className="side-link">About Us</li>
          <li className="side-link">Testimonials</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
