import {useEffect, useState} from 'react'
import './app.module.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routing/AppRouter.jsx";
import Footer from "./generic/footer/Footer.jsx";
import Header from "./generic/header/Header.jsx";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async operation (replace with your actual loading logic)
    const loadingDelay = 1500; // 1.5 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Run the effect only once on mount

  if (isLoading) {
    return <></>
  }

  return (
    <BrowserRouter>
      <Header/>

      <AppRouter/>
      {/*<Footer/>*/}
    </BrowserRouter>
  )
}

export default App;