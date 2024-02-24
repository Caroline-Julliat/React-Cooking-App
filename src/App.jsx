import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from './Layout';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;