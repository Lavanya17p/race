import React from "react";
import Contact from "./Components/Contact";
import Handling from "./Components/Handling";
import Navbar from "./Components/Navbar";
import Options from "./Components/Options";
import Power from "./Components/Power";
import Speed from "./Components/Speed";

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Options />
      <Handling />
      <Contact />
    </>
  );
}

export default App;
