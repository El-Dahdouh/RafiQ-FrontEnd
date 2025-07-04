import React from "react";

const Contact = () => {
  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>If you have questions, suggestions, or need help — feel free to reach out:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Email: support@rafiq.app</li>
        <li>Twitter: <a href="https://twitter.com/rafiq" className="text-blue-600">@rafiq</a></li>
        <li>GitHub: <a href="https://github.com/rafiq" className="text-blue-600">github.com/rafiq</a></li>
      </ul>
    </div>
  );
};

export default Contact;
