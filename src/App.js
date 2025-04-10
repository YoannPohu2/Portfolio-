import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from './views/Home'
import About from "./views/About";
import Technologie from "./views/Technologie";
import Parcours from "./views/Parcours";
import Project from "./views/Projects";
import LoadingScreen from "./Components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Technologie />
            <Parcours />
            <Project/>
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
