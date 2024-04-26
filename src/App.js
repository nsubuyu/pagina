import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Cortinas from "./components/Cortinas";
import Motores from "./components/Motores";
import Elevadores from "./components/Elevadores";

function App() {
  const [otherLoc, setDisplayOther] = useState(false)

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <>
      <Header varOther={otherLoc} setOther={setDisplayOther}/>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home setOther={setDisplayOther}/>} />
          <Route path="/about" element={<About setOther={setDisplayOther}/>} />
          <Route path="/cortinas" element={<Cortinas setOther={setDisplayOther}/>}/>
          <Route path="/contact" element={<Contact setOther={setDisplayOther}/>} />
          <Route path="/motores" element={<Motores setOther={setDisplayOther}/>}/>
          <Route path="/elevadores" element={<Elevadores setOther={setDisplayOther}/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default App;
