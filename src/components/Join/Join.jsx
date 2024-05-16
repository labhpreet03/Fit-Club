import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_06jnddt", "template_djdzwgw", form.current, 
       'MwwaMOomZGOrQ0c5S'
      )
      .then(
        (response) => {
          alert("Email sent successfully:", response);
        },
        (error) => {
          console.log("Failed to send email:", error);
        }
      );
  };

  return (
    
      <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">ready to</span>
            <span> level up</span>
          </div>
          <div>
            <span>your body</span>
            <span className="stroke-text"> with us?</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your email id " />
            <button className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    
  );
};

export default Join;
