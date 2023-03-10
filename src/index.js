import React, {useEffect,useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Language,
  Career,
} from "./components";
import i18next from "./services/i18n";
import { useTranslation  } from 'react-i18next';
import {Helmet} from "react-helmet";
import i18n from "i18next";
import Cookies from "js-cookie";

function App() {
  const { t } = useTranslation();
 
  useEffect(() => {
    const lang = Cookies.get("language");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    Cookies.set("language", i18n.language, {expires:25});
  },[i18n.language]);

  return (
    <React.Suspense fallback="Loading...">
      <Helmet>
        <html lang={i18n.language} />
        
      </Helmet>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
