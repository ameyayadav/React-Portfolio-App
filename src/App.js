import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Header from "../src/Components/Header";
import Projects from "../src/pages/Project";
import Contact from "../src/pages/Contact";
import Error from "../src/pages/Error";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <Router>
        <div className="page-body">
            <Header />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="*" extact={true} element={<Error />}></Route>
            </Routes>
            
            <Footer />
        </div>
    </Router>
    
  );
}

export default App;