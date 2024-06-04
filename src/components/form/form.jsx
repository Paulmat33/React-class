import React from 'react'
import './form.css'

const form = () => {
  return (     
    <section className="form-section container">
      <form>
        <div className="name-form">
          <div className="name-input">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>

          <div className="mail">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" required />
          </div>
        </div>

        <div className="formname">
          <label>Subject</label>
          <input type="text" placeholder="Write a subject" required />
        </div>

        <div className="formname message">
          <label>Message</label>
          <textarea
            type="text"
            placeholder="Write your message"
            id="" required
          ></textarea>
        </div>

        <button className="send-btn">Send</button>
      </form>
    </section>
  )
}

export default form