import React, { useState } from "react";
import Data from "../../data/products.json";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const handleFirstName = (type) => {
  //   console.log(type);
  // };
  // const handleLastName = (type) => {
  //   console.log(type);
  // };
  // const handleEmail = (type) => {
  //   console.log(type);
  // };
  // const handlePhoneNumber = (type) => {
  //   console.log(type);
  // };

  const parseNames = (strings) => {
    strings = strings.replace(/\s+/g, "");
    strings = strings.toLowerCase().split("").sort().join("");

    for (let i = 0; i < strings.length; i++) {
      if (!isNaN(strings.charAt(i)) && !(strings.charAt(i) === " ")) {
        return false;
      }
    }
    return true;
  };

  const parseEmail = (strings) => {
    strings = strings.replace(/\s+/g, "");
    strings = strings.toLowerCase().split("").sort().join("");

    for (let i = 0; i < strings.length; i++) {
      if (strings.charAt(i) === "@") {
        return false;
      }
    }
    return true;
  };

  const formSub = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

  const handleSubmit = (submit) => {
    submit.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === ""
    ) {
      alert(
        "First Name, Last Name, Email, and Phone Number are required fields"
      );
    }
    if (!parseNames(firstName)) {
      alert("Unvalid First Name");
    }
    if (!parseNames(lastName)) {
      alert("Invalid Last Name");
    }

    if (parseEmail(email)) {
      alert("Unvalid Email");
    }

    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      alert("Invalid Phone Number");
    }

    formSub();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-item form-item--01">
        <label>First Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>

      <div className="form-item form-item--02">
        <label>Last Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div className="form-item form-item--03">
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="form-item form-item--04">
        <label>Phone Number</label>
        <input
          type="number"
          // pattern="[0-9]{10}"
          name="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
      </div>
      <div className="form-item form-item--05">
        <label>Comments</label>
        <textarea
          rows="5"
          cols="20"
          placeholder="Hi leave comment"
          name="comment"
        ></textarea>
      </div>
      <button className="form-btn form-item_06" name="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
