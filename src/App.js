import React from "react";

//import components
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      <div className="h-[2000px]"></div>
    </div>
  );
};

export default App;
