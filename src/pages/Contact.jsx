import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] =
    useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus(
            "Message sent successfully!"
          );
          form.current.reset();
        },
        () => {
          setStatus(
            "Failed to send message."
          );
        }
      );
  };

  return (
    <div className="py-20">

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Let's discuss your hiring needs or
          career goals.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-12 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-lg p-4"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            required
            className="w-full border rounded-lg p-4"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg"
          >
            Send Message
          </button>

        </form>

        {status && (
          <p className="mt-6 text-center font-medium">
            {status}
          </p>
        )}

      </div>

    </div>
  );
}