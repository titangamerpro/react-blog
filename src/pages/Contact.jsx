import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formSend, setFormSend] = useState(false)

    const handleSabmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("https://formsubmit.co/ajax/titangamerpro10@gmail.com", {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({name, email, message})
            } )
            if(!response.ok) throw new Error('server return error')
            if(response.ok){
                setName('')
                setEmail('')
                setMessage('')
                setFormSend(true)

                setTimeout(() => setFormSend(false), 3000)
            }else{
                console.error('Error submit form');
            }
        } catch (error) {
            console.error('Error submit form');
            
        }
    }

  return (
    <main>
      <div className="container">
        <h1>Contact</h1>
        <form className="newFormPost" 
           onSubmit={handleSabmit}>
          <label htmlFor="postTitle">Name:</label>
          <input
            value={name}
            name="name"
            type="text"
            id="postTitle"
            required
            placeholder="add the name"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="postBody">Email:</label>
          <input
            value={email}
            name="email"
            type="email"
            id="postTitle"
            required
            placeholder="add the email"
            onChange={e => setEmail(e.target.value)}

          />
          <label htmlFor="postBody">Message:</label>
          <textarea
            value={message}
            name="message"
            id="postBody"
            placeholder="add the text"
            maxLength="500"
            onChange={e => setMessage(e.target.value)}

          />
          <button type="submit">submit</button>
          {formSend && <p>Form sucses</p>}
        </form>
      </div>
    </main>
  );
};

export default Contact;
