import logo from "./logo.svg";
import "./App.css";
import Timer from "./component/Timer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Footer from "./component/Footer/Footer";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Contact from "./component/Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
