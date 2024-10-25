import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Status state for form submission
  const [status, setStatus] = useState('');

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS service and template IDs, and public key
    const serviceId = 'service_avnx3cf'; // Replace with your EmailJS service ID
    const templateId = 'template_vu23vc6'; // Replace with your EmailJS template ID
    const publicKey = 'bUsCeZi2VSMT44ziN'; // Replace with your EmailJS public key

    // Create an object that contains dynamic template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Your Name', // You can change this to your own name or the receiver
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('SUCCESS');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('FAILED');
      });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl mb-6">Contact Us</h2>

      {/* Show success or failure message */}
      {status === 'SUCCESS' && (
        <p className="text-green-500 mb-4">Your message was sent successfully!</p>
      )}
      {status === 'FAILED' && (
        <p className="text-red-500 mb-4">There was an error sending your message. Please try again.</p>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={5}
            placeholder="Your Message"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
