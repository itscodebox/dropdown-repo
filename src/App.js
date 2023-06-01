import "./styles.css";
import React, { useState } from "react";
// import Select from "react-select";

export default function App() {
  const [data, setData] = useState([
    { name: "India", value: "IN" },
    { name: "Pak", value: "PK" },
    { name: "Bangladesh", value: "BG" },
  ]);
  const [value, setValue] = useState();
  const [inputData, setInputData] = useState({
    name: "",
    value: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name, "handle Change");
    console.log(e.target.value, "handle Change");
    if (e.target.name === "name") {
      setInputData({ ...inputData, name: e.target.value });
    } else {
      console.log(inputData, "inputData**");
      setInputData({ ...inputData, value: e.target.value });
    }

    console.log(inputData, "inputData---------");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleAddClick = () => {
    setData([...data, inputData]);
  };

  return (
    <div className="App">
      <input name="name" onChange={handleInputChange} />
      <input name="value" onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      <select onChange={handleChange} value={value}>
        {data.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
