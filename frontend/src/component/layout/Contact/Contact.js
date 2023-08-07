import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
       
      <div className="contactBox">
      <h1 className="contact-heading">CONTACT US</h1>
        <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
          <Button>fazalkhaliq.863.ff@gmail.com</Button>
        </a>
        <div className="contact">
          <h2>Cell No1: 03000000000</h2>
          <h2>Cell No2: 03100000000</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
