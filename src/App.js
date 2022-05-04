import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Inventory from "./components/Inventory/Inventory";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Header />
      {/* ------------------------ */}
      {/* My all Routes code  */}
      {/* ------------------------ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manage" element={<ManageInventory />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Not Found Route  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
