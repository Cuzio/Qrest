import React from "react";
import contact from "../images/contact.png";
import "../css/contactBody.css";
import emailjs from "emailjs-com";

const ContactBody = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bftvsdj",
        "template_7lbo25g",
        e.target,
        "x5mPoTHghaCtC2JIc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <div className="contentz">
        <div className="appoint">
          <h6>Message Us</h6>
          <h4>Free Appointment</h4>
          <p>
            Fill in our short contact form for a no-obligation consultation with
            a member of our team.
          </p>
        </div>
        <div className="message">
          <form onSubmit={sendEmail}>
            <div className="fill">
              <label htmlFor="name">
                Your Name(required) <span>*</span>
              </label>
              <input
                type="text"
                name="to_name"
                className="input"
                placeholder="Your Name"
              />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Your Email(required) <span>*</span>
              </label>
              <input
                type="email"
                name="to_email"
                className="input"
                placeholder="Your Email"
              />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Subject <span>*</span>
              </label>
              <input type="text" name="to_subject" className="input" required />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Message <span>*</span>
              </label>
              <textarea
                name="message"
                className="messagetext"
                placeholder="Your Message"
              />
            </div>
            <button type="submit" className="contact_us">
              Send Email
            </button>
          </form>
          {/* <form
            action="mailto:maxwellokoye0@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="fill">
              <label htmlFor="name">
                Your Name(required) <span>*</span>
              </label>
              <input type="text" name="name" className="input" required />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Your Email(required) <span>*</span>
              </label>
              <input type="email" name="email" className="input" required />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Subject <span>*</span>
              </label>
              <input type="text" name="subject" className="input" required />
            </div>
            <div className="fill">
              <label htmlFor="name">
                Message <span>*</span>
              </label>
              <textarea
                className="messagetext"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input type="submit" value="Contact Us" className="contact_us" />
          </form> */}
        </div>
      </div>
      <div>
        <img src={contact} alt="" className="contact_pic" />
      </div>
    </div>
  );
};

export default ContactBody;
