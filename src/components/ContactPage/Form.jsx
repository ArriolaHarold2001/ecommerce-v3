import React, { useState } from "react";
import Data from "../../data/products.json";

const Form = () => {
  const handleForm = (type) => {
    console.log(type.target.value);
  };

  const handleSubmit = (submit) => {
    // submit.preventDefault();
  };

  return (
    <>
      {Data.formCreation.map((item) => (
        <div className="form-item" key={item.id}>
          <label htmlFor={item.inID}>{item.labelName}</label>
          <input
            onChange={handleForm}
            name={item.name}
            required={item.required}
            // placeholder={item.placeHolder}
            id={item.inID}
            type={item.type}
            pattern={item.pattern}
          ></input>
        </div>
      ))}
      <div class="form-item">
        <label>Comments</label>
        <textarea
          rows="5"
          cols="20"
          placeholder="Hi leave comment"
          name="comment"
        ></textarea>
      </div>
      <button className="form-btn form-item_06" name="submit" type="submit">
        Send
      </button>
    </>
  );
};

export default Form;
