import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import Home from "./pages/Home.tsx";
function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
