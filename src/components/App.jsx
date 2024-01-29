import React from "react";
import Welcome from "./Welcome";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="h-[500px] flex justify-center items-center">
        <Welcome />
      </div>
      <Footer />
    </>
  );
};

export default App;
