import { cilMenu, cilX, cilMoon, cilSun } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import "./style.css";
import { useContext, useEffect } from "react";
import ThemeContext from "../../contexts/ThemeProvider";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    let root = document.querySelector<any>(":root");
    if (theme == "true") {
      root?.style?.setProperty("--background", "#161513");
      root?.style.setProperty("--textPrimary", "#fff");
    } else {
      root?.style?.setProperty("--background", "#ebf0ff");
      root?.style?.setProperty("--textPrimary", "#0f172a");
    }
  }, [theme]);
  useEffect(() => {
    let root = document.querySelector<any>(":root");
    if (theme == "true") {
      root?.style?.setProperty("--background", "#161513");
      root?.style.setProperty("--textPrimary", "#fff");
    } else {
      root?.style?.setProperty("--background", "#ebf0ff");
      root?.style?.setProperty("--textPrimary", "#0f172a");
    }
  }, []);
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
      <div className="right">
        <div>
          {theme ? (
            <CIcon
              icon={cilSun}
              size="custom"
              style={{
                width: "20px",
                height: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="mode"
              onClick={() => toggleTheme(!theme)}
            />
          ) : (
            <CIcon
              icon={cilMoon}
              size="custom"
              style={{
                width: "20px",
                height: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="mode"
              onClick={() => toggleTheme(!theme)}
            />
          )}
        </div>
        <div className="contact">
          <button className="btnPrimary">Contact Me</button>
        </div>
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
          <div>
            {theme ? (
              <CIcon
                icon={cilSun}
                size="custom"
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                className="mode"
                onClick={() => toggleTheme(!theme)}
              />
            ) : (
              <CIcon
                icon={cilMoon}
                size="custom"
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                className="mode"
                onClick={() => toggleTheme(!theme)}
              />
            )}
          </div>
          <div className="contact">
            <button className="btnPrimary">Contact Me</button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
