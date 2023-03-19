import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './Components/Portfolio'
// import Dashboard from './Components/Dashboard'

import Home from "./Components/Home/index";
import Layout from './Components/Layout';
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Portfolio from "./Components/Portfolio/index";
import Dashboard from "./Components/Dashboard/index";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App