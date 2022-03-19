import React from "react";
import ContactHero from "../UniversalComponents/Hero/ContactHero";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import "./contact.css";
import Form from "./Form";
// import "../../App.css";

const Contact = () => {
  return (
    <>
      <Nav />
      <ContactHero />
      <form className="contact-form">
        <Form />
      </form>
      <Footer />
    </>
  );
};

export default Contact;
