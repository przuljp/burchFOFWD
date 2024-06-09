import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      // Clear any existing error message
      setEmailError("");

      // Handle form submission here
      console.log("Form submitted:", email);

      // Reset email state
      setEmail("");

      // Set submitted state to true
      setSubmitted(true);
    }
  };

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleChange}
            className={emailError ? "error" : ""}
          />
          {emailError && <div className="error">{emailError}</div>}
          {submitted && <div className="success">Email submitted successfully!</div>}
        </form>
      </div>
      <button onClick={handleSubmit} className="secondary-button">
        Submit
      </button>
    </div>
  );
};

export default Contact;
