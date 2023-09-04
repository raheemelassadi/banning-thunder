import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dd6xpmh",
        "template_afrz53o",
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
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col text-black font-Jakarta md:justify-center md:items-center md:w-auto "
    >
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        required
        placeholder="Name"
        className="pl-4 py-4 md:w-2/5"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        required
        placeholder="Email"
        className="pl-4 py-4 md:w-2/5"
      />
      <label>Message</label>
      <textarea
        name="message"
        required
        placeholder="Enter Message"
        className="pl-4 py-4 md:w-2/5"
      ></textarea>
      <input
        type="submit"
        value="Submit"
        className="md:w-1/4 py-4 bg-yellow-500 rounded-xl cursor-pointer mt-3 transition-all active:scale-75 "
      />
    </form>
  );
};

export default Contact;
