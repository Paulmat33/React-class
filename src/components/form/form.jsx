import React from 'react'
import './form.css'

const form = () => {
  return (     
    <section class="form-section container">
      <form>
        <div class="name-form">
          <div class="name-input">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>

          <div class="mail">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" required />
          </div>
        </div>

        <div class="formname">
          <label>Subject</label>
          <input type="text" placeholder="Write a subject" required />
        </div>

        <div class="formname message">
          <label>Message</label>
          <textarea
            type="text"
            placeholder="Write your message"
            id="" required
          ></textarea>
        </div>

        <button class="send-btn">Send</button>
      </form>
    </section>
  )
}

export default form