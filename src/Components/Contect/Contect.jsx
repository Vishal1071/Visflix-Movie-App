import './Contect.css'
import {Form} from "react-router-dom";

export const contactData = async ({ request }) =>{
  try {
   const res = await request.formData();
   const data = Object.fromEntries(res);
   console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const Contect = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">We’d love to hear from you! Please fill out the form below.</p>


        <div className="contact-content">
          {/* Contact Form */}
          <Form method='POST' action='/contect' className="contact-form">
            <label htmlFor="name">Name</label>
            <input 
            name='name'
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            required />


            <label htmlFor="email">Email</label>
            <input 
            name="email"
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            required />


            <label htmlFor="message">Message</label>
            <textarea 
            name="message"
            id="message" 
            rows="5" 
            placeholder="Write your message..." 
            required>
            </textarea>


            <button type="submit">Send Message</button>
          </Form>


          {/* Contact Info */}
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>123 Main Street, Ahmedabad, India</p>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>


            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.61453722173!2d72.5713623144435!3d23.022505784946906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f5f7f0b8db%3A0x6e3b0a2d49c4f6e3!2sAhmedabad!5e0!3m2!1sen!2sin!4v1677667611990!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect
