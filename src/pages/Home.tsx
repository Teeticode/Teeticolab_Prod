import React, { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeProvider";
import { themeInterface } from "../type";
import Header from "../components/header";
import "./home.css";
import Hero from "../components/hero";
import { useTour } from "@reactour/tour";
import About from "../components/about";
type props = {};
const Home: React.FC<props> = () => {
  const { theme, toggleTheme } = useContext<themeInterface>(ThemeContext);
  const { setIsOpen } = useTour();
  useEffect(() => {
    setIsOpen(true);
    if (theme == "true") {
      console.log("true is here");
    } else {
      console.log("false is here");
    }

    let root = document.querySelector<any>(":root");
    if (theme) {
      root?.style?.setProperty("--background", "#161513");
      root?.style.setProperty("--textPrimary", "#fff");
    } else {
      root?.style?.setProperty("--background", "#ebf0ff");
      root?.style?.setProperty("--textPrimary", "#0f172a");
    }
  }, []);
  useEffect(() => {
    let root = document.querySelector<any>(":root");
    if (theme) {
      root?.style?.setProperty("--background", "#161513");
      root?.style.setProperty("--textPrimary", "#fff");
    } else {
      root?.style?.setProperty("--background", "#ebf0ff");
      root?.style?.setProperty("--textPrimary", "#0f172a");
    }
  }, [theme]);
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
