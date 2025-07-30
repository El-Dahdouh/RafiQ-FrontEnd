import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dujdxgk", "template_4kcnu5a", form.current, {
        publicKey: "hab74yyQUVd2GMjdJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-2xl max-w-4xl w-full p-8 md:p-14">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We are here to help! Whether you have questions, suggestions, or
            want to report a problem, feel free to reach out. Fill out the form
            below or connect with us directly via email or social media.
          </p>
        </div>

        <form ref={form} onSubmit={sendMessage} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              id="title"
              name="title"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            id="message"
            name="message"
            rows="2"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
