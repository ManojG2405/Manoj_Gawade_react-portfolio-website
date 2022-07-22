import React from "react";
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'



const Contact = () => {
  return <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>gawade.manoj7@hotmail.com</h5>
          <a href="mailto:gawade.manoj7@hotmail.com" rel="noreferrer" target="_blank">Send a Mail</a>
        </article>
        <article className="contact__option">
          <FaFacebookMessenger className="contact__option-icon" />
          <h4>Messenger</h4>
          <h5>Manoj Gawade</h5>
          <a href="https://m.me/manoj.gawade" rel="noreferrer" target="_blank">Send a Message</a>
        </article><article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+91 8308987577</h5>
          <a href="https://api.whatsapp.com/send?phone=8308987577" rel="noreferrer" target="_blank">Send a Message</a>
        </article>

      </div>
      {/* End of Contact Options */}
      <form action="">

        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      {/* Email section not working */}
    </div>
  </section>;
};

export default Contact;
