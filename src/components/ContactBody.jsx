import React from "react";
import contact from "../images/contact.png";
import "../css/contactBody.css";

const ContactBody = () => {
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
          <form
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
            {/* <button>
              <a href="mailto:itomax19@gmail.com">Contact Us</a>
            </button> */}
          </form>
        </div>
      </div>
      <div>
        <img src={contact} alt="" className="contact_pic" />
      </div>
    </div>
  );
};

export default ContactBody;
