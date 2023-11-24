import React, { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeProvider";
import { themeInterface } from "../type";
import Header from "../components/header";
import "./home.css";
type props = {};
const Home: React.FC<props> = () => {
  const { theme, toggleTheme } = useContext<themeInterface>(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className="home">
      <Header />
    </div>
  );
};

export default Home;
