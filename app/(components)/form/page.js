"use client"
import { useState } from "react"
function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name ,email, message }),
    })
    .then(res=>console.log(res))
    .catch(e=>console.log())
  }
  return (
    <form onSubmit={handleSubmit}>
    <div id="div-container">
      <section>
        <p>Name</p>
        <input 
          type="text" 
          name="fullname" 
          id="name" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          required
        />
        <p>Email</p>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
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
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
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
