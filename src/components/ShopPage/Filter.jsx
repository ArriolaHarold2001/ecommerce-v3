import React, { useState } from "react";
import Data from "../../data/products.json";
import "./filter.css";

const Filter = () => {
  let [filterOp, setFilterOp] = useState("");
  const [dropValue, setDropValue] = useState(Data.dropFilter);

  const handleFilterChange = (e) => {
    setFilterOp(e.target.value);
    console.log(filterOp);
  };

  // const handSubmit = () => {
  //   if(filterOp === {drop})
  // };

  return (
    <>
      <aside className="shop-nav dropdown">
        <div className="dropdown-spacer">
          <label for="drop-down">Choose Filter</label>
          <select
            id="drop-down"
            type="text"
            name="category"
            className="dropdown-select"
            onChange={handleFilterChange}
          >
            {Data.dropFilter.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <button from="drop-down" className="dropbtn">
            Submit
          </button>
        </div>
        {/* <button className="dropbtn">
          Product Type
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dropdown shop-svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div id="myDropDown" className="dropdown-content" data-visible="false">
          <a href="#">Cars</a>
          <a href="#">Black/White</a>
          <a href="#">Bright</a>
          <a href="#">Signature Shots</a>
        </div> */}
      </aside>
    </>
  );
};

export default Filter;
