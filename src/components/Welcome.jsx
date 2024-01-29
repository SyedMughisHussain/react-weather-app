import React, { useEffect } from "react";
import Form from "./Form";
import axios from "axios";

const Welcome = () => {

  const getData = (data) => {
    console.log(data);
  } 

  return (
    <div className="h-[450px] shadow-2xl shadow-slate-700 w-[700px] rounded-xl mt-[40px]">
      <Form getData={getData} />
    </div>
  );
};

export default Welcome;
