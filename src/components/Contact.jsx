import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "./config";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) return;

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", website: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
        </p>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Send me a message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field */}
            <div className="honeypot">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                id="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex="-1"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-textarea"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-accent">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
