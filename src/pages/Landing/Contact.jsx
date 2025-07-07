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
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("title").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-us px-4 py-10 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-gray-600">
            We are here to help! Whether you have questions, suggestions, or
            want to report a problem, feel free to reach out. Fill out the form
            below or connect with us directly via email or social media.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            ref={form}
            onSubmit={sendMessage}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title for the message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-3"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 md:col-span-3"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
