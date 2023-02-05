import React from "react";
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

ReactDOM.render(
    <React.Suspense fallback="Loading...">
  <Router>
    
    <Navigation />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/career" element={<Career />} />
    </Routes>
    <Footer />
 </Router>,
 </React.Suspense>,
  document.getElementById("root")
);
