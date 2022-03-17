import React from "react";
import ContactHero from "../UniversalComponents/Hero/ContactHero";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import "./contact.css";
// import "../../App.css";

const Contact = () => {
  return (
    <>
      <Nav />
      <ContactHero />
      <form className="contact-form">
        <div className="form-item form-item--01">
          <label>First Name</label>
          <input
            placeholder="Joe? Maria?... "
            type="text"
            required="required"
            name="name"
          />
        </div>
        <div className="form-item form-item--02">
          <label>Last Name</label>
          <input
            placeholder="Smith? Johnson?..."
            type="text"
            required="required"
            name="name"
          />
        </div>
        <div className="form-item form-item--03">
          <label>Email</label>
          <input
            placeholder="Email@email.com"
            type="email"
            required="required"
            name="email"
          />
        </div>
        <div className="form-item form-item--04">
          <label>Phone Number</label>
          <input
            placeholder="Ill send a goodnight txt"
            type="text"
            pattern="[0-9]{10}"
            required="required"
            name="phoneNumber"
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
        <button className="form-btn form-item_06" type="submit" name="submit">
          Send
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
