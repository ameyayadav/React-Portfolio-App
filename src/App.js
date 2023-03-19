import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Notfound from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <div className="page-body">
            <Header />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="*" extact={true} element={<Notfound />}></Route>
            </Routes>
            
            <Footer />
        </div>
    </Router>
    
  );
}

export default App;