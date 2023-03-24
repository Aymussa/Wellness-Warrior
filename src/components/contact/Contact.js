import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    // handle form submission here
  }

  return (
    <div>
      <div className="container">
        <h1 className="ContactH">Contact Us</h1>
        <p className="contact-p text-black pt-6">
          Please fill out our contact form if you have any inquiries or need
          additional details about our services.
        </p>
        <div className="contact-parent">
          <div className="contact-child child1">
            <p>
              <i className="fas fa-map-marker-alt"></i> Address <br />
              <span>
                {" "}
                9-Wellness Warrior
                <br />
                London, UK
              </span>
            </p>

            <p>
              <i className="fas fa-phone-alt"></i> Let's Talk <br />
              <span> 0787878787</span>
            </p>

            <p>
              <i className=" far fa-envelope"></i> General Support <br />
              <span>example@wellness.co.uk</span>
            </p>
          </div>

          <div className="contact-child child2">
            <div className="inside-contact">
              <h2 className="font-semibold text-[19px]">Contact Us</h2>
              <h3>
                <span id="confirm"></span>
              </h3>

              <form onSubmit={handleSubmit}>
                <p>Name *</p>
                <input
                  id="txt_name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <p>Email *</p>
                <input
                  id="txt_email"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p>Phone *</p>
                <input
                  id="txt_phone"
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <p>Subject *</p>
                <input
                  id="txt_subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <p>Message *</p>
                <textarea
                  id="txt_message"
                  rows="4"
                  cols="20"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>

                <input type="submit" id="btn_send" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
