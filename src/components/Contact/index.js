import React, { useState } from "react";

function ContactForm() {
    // the Hook that will manage the form data
    //'' is used to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email:'', message: ''});

    //destructure the formState
    const { name, email, message } = formState;

    //this function will sync the internal state of the component formState w/ the user input from the DOM; onChange event listener will ensure that the handleChange function fires 
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      //this will log the changes in the form elements of the UI.  It shows the sync w/ the state of the component
    //   console.log(formState);

    //
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

  // JSX
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"   />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
