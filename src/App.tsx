// Hooks
import { useEffect, useState } from "react";

import "./App.css"

// Components
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Loader from "./components/Loader";



const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingDuration = 2000;

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading
        ? <Loader animationDuration={2} />
        : <>
          <Navbar />
          <Hero />
        </>
      }
    </>
  );
}


export default App;