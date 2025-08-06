import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}
