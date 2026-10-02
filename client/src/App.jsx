import React from "react";
import {BrowserRouter, Routes, Route }from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import EventDetails from "./views/EventDetails/EventDetails";
import Event from "./views/Events/Event";
import MyRegistration from "./views/MyRegistration/MyRegistration";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/" element={<EventDetails />} />
        <Route path="/my-registration" element={<MyRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
