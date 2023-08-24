import React from "react";
import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorEmail) {
      alert("Las credenciales no son correctas");
    }
  };
  return (
    <>
      <div className="form-email-container">
        <p>Get early access today</p>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className={`${errorEmail && "error"}`}
            type="email"
            value={email}
            placeholder="email@example.com"
            onChange={handleChangeEmail}
          />
          {errorEmail && (
            <span className="errorMessage"style={{ color: "red"}}>Please enter a valid email address</span>
          )}
          <button type="submit">Get Started For Free</button>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
