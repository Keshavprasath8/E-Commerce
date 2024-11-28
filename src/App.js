

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import User from "./components/Home";
import Carts from "./components/Carts";
import Admin from "./components/Admin";
import { Productdetail } from "./components/Productdetail";

function App() {
  const [cartes, setCartes] = useState([]); 
  return (
    < div className="App" style={{background:"rgba(196, 196, 196, 0.466)"}}>
    <BrowserRouter>
    
    <Header/>
    
    <div className="">
       <Routes>
          <Route path="/" element={<Hero cartes={cartes} setCartes={setCartes} />} />
          <Route path="/home" element={<Hero cartes={cartes} setCartes={setCartes} />} />
          <Route path="/User" element={<User cartes={cartes} setCartes={setCartes} />} />
          <Route path="/Admin" element={<Admin/>} />
         <Route path="/Carts" element={<Carts/>} />
         <Route path="/products/:id" element={<Productdetail/>} />
      </Routes>
</div>
    </BrowserRouter>
    </div>
  );
}

export default App;
