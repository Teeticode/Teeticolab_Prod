import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const value = await localStorage.getItem("theme");
        if (value) {
          setTheme(value);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const toggleTheme = async (newTheme) => {
    setTheme(newTheme);
    await localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
