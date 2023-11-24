import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import Home from "./pages/Home.tsx";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
