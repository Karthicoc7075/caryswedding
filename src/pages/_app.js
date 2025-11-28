import "@/styles/globals.css";
import { useState,useEffect } from "react";
import Loader from "@/components/loader";

export default function App({ Component, pageProps }) {
   const [loading, setLoading] = useState(true);

    useEffect(() => {
    const heroImageUrl = '/images/hero-background.webp';
    
    const img = new Image();
    img.src = heroImageUrl;
    
    img.onload = () => {
      setLoading(false);
    };
    
    img.onerror = () => {
      setLoading(false);
    };
  }, []);


   if (loading) {
     return <Loader />;
   }

  return <Component {...pageProps} />;
}
