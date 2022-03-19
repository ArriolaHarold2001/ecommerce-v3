import React, { useState } from "react";
import Data from "../../data/products.json";
import "./filter.css";
import ProductComponent from "./ProductComponent";

const Filter = () => {
  let [filterOp, setFilterOp] = useState("All");

  const handleFilterChange = (e) => {
    setFilterOp(e.target.value);
  };

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
      </aside>
      <ProductComponent filterOption={filterOp} />
    </>
  );
};

export default Filter;
