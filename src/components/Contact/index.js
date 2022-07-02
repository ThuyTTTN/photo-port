import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // the Hook that will manage the form data
  //'' is used to clear the input fields on the component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //errorMessage Hook
  const [errorMessage, setErrorMessage] = useState("");

  //destructure the formState
  const { name, email, message } = formState;


  //this will log the changes in the form elements of the UI.  It shows the sync w/ the state of the component
  //   console.log(formState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    //allows the state to update w/ the user input if there is no error message
    if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };

  
  //this function will sync the internal state of the component formState w/ the user input from the DOM; onChange event listener will ensure that the handleChange function fires
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
