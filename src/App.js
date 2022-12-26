import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Leder from "./pages/Leder";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="leder" element={<Leder />} />
    </Route>
  </Routes>
    
    </div>
     
  );
}



