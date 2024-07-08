import React from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Future from "./components/Future";
import Present from "./components/Present";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <Nav />
      <Present />
      <Future />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
