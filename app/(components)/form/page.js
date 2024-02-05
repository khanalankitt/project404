"use client"
import emailjs from '@emailjs/browser';

import { useRef } from 'react';
function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jqi6p8h', 'template_mvmt3td', form.current, {
        publicKey: 't5vPvAvkb3z1l8Fuo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <div id="div-container">
      <section>
        <p>Name</p>
        <input 
          type="text" 
          name="from_name" 
          id="name" 
          required
        />
        <p>Email</p>
        <input 
          type="email" 
          name="user_email" 
          id="email" 
          required
        />
      </section>
      <section>
        <p>Message</p>
        <textarea 
          name="message" 
          id="textaea" 
          cols="20" 
          rows="5" 
        ></textarea>
      </section>
    </div>
    <div className="button-container">
      <input type="submit" id="submit" value="Submit" />
      <input type="reset" id="submit" value="Reset" />
    </div>
  </form>
  );
}

export default ContactForm;
