import React, { useRef } from "react";

const Form = (props) => {
  const cityName = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getData(cityName.current.value);
    cityName.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-[20px]">
      <div>
        <input
          className="w-[500px] ml-[40px] p-2 focus:outline-none rounded-md"
          type="text"
          placeholder="Enter city name"
          ref={cityName}
          required
        />
      </div>
      <div>
        <button type="submit" className="p-2 bg-blue-400 text-white ml-[20px] rounded-md hover:bg-white hover:text-pink-500">Search</button>
      </div>
    </form>
  );
};

export default Form;
