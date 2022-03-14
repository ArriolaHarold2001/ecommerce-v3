import React from "react";
import ContactHero from "../UniversalComponents/Hero/ContactHero";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <form class="contact-form">
        <div class="form-item form-item--01">
          <label>First Name</label>
          <input
            placeholder="Joe? Maria?... "
            type="text"
            required="required"
            name="name"
          />
        </div>
        <div class="form-item form-item--02">
          <label>Last Name</label>
          <input
            placeholder="Smith? Johnson?..."
            type="text"
            required="required"
            name="name"
          />
        </div>
        <div class="form-item form-item--03">
          <label>Email</label>
          <input
            placeholder="Email@email.com"
            type="email"
            required="required"
            name="email"
          />
        </div>
        <div class="form-item form-item--04">
          <label>Phone Number</label>
          <input
            placeholder="Ill send a goodnight txt"
            type="text"
            pattern="[0-9]{10}"
            required="required"
            name="phoneNumber"
          />
        </div>
        <div class="form-item form-item--05">
          <label>Comments</label>
          <textarea
            rows="5"
            cols="20"
            placeholder="Hi leave comment"
            name="comment"
          ></textarea>
        </div>
        <button class="form-btn form-item_06" type="submit" name="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;
