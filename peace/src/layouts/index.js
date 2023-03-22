import React,{useEffect, useState} from "react";

import LayoutStyle from "./layoutStyle";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Headerlayout({ children }) {

  const [isSticky, setSticky] = useState(false);
  const isBrowser = typeof window !== "undefined";

    // Sticky Menu Area
    useEffect(() => {
      if (isBrowser) {
        window.addEventListener("scroll", onScroll);
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }
    });
  
    /* Method that will fix header after a specific scrollable */
    const onScroll = (e) => {
      const scrollTop = isBrowser ? window.scrollY : "";
      setSticky(scrollTop > 100 ? true : false);
    };

  return (
    <LayoutStyle.Container>
      <Header />
      {isSticky && <Header layout="other"/>}
      {children}
      <Footer />
    </LayoutStyle.Container>
  );
}
