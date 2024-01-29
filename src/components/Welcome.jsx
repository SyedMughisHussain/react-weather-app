import React from "react";
import Form from "./Form";

const Welcome = () => {

  const getData = (data) => {
    console.log(data);
  }

  return (
    <div className="h-[450px] shadow-2xl shadow-slate-700 w-[700px] rounded-xl mt-[40px]">
      {/* <p className="text-center text-[25px] font-bold mt-2">
        React Weather App
      </p> */}
      <Form getData={getData}/>
    </div>
  );
};

export default Welcome;
