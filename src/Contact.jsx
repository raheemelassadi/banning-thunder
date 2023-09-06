import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  // State variables
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dd6xpmh",
        "template_7dfy8ip",
        form.current,
        "PQXyZDi2W5ZN7VZnm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the form and show success banner
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
    setSubmitted(true);

    // Reset the form after a brief delay (if needed)
    setTimeout(() => {
      setSubmitted(false);
    }, 5000); // Clear the success banner after 5 seconds
  };

  return (
    <div>
      {submitted && (
        <div className="bg-yellow-500 text-black p-3 text-center">
          Form submitted successfully!
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-black font-Jakarta md:justify-center md:items-center md:w-auto"
      >
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Name"
          className="pl-4 py-4 md:w-2/5"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Email"
          className="pl-4 py-4 md:w-2/5"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          required
          placeholder="Enter Message"
          className="pl-4 py-4 md:w-2/5"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="md:w-1/4 py-4 bg-yellow-500 rounded-xl cursor-pointer mt-3 transition-all active:scale-75"
        />
      </form>
    </div>
  );
};

export default Contact;
