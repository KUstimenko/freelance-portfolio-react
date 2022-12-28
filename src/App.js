import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
