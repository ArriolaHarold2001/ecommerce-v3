import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./filter.css";
import ProductComponent from "./ProductComponent";

const Filter = () => {
  const SQL_IP = "3.23.99.126";
  const [filterList, setFilterList] = useState([]);
  let [filterOp, setFilterOp] = useState("All");

  const getData = () => {
    Axios.get(`http://nucaprints.com:8000/api/drop-filter`)
      .then((response) => {
        setFilterList(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (e) => {
    setFilterOp(e.target.value);
  };

  return (
    <>
      <aside className="shop-nav dropdown">
        <div className="dropdown-spacer">
          <label htmlFor="drop-down">Choose Filter</label>
          <select
            id="drop-down"
            type="text"
            name="category"
            className="dropdown-select"
            onChange={handleFilterChange}
          >
            {filterList.map((item) => (
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
