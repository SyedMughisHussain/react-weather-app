import React from "react";
import Welcome from "./Welcome";

const App = () => {
  return (
    <>
      <div className="h-[500px] flex justify-center items-center">
        <Welcome />
      </div>
      <div className="text-center">
        <span className="text-blue-300 font-bold" >Coded by </span>
        <span className="text-[#AC5183] font-bold"><a href="https://github.com/SyedMughisHussain">Syed Mughis Hussain, </a></span>
        <span className="text-blue-300 font-bold">Hosted on Vercel.</span>
      </div>
    </>
  );
};

export default App;
